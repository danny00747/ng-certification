import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {ICityInfo, IWeather, IWeatherData, Location} from "@shared/models/weather.model.";
import {filter, map, tap} from "rxjs/operators";
import {$enum} from "ts-enum-util";
import {SkyStatusEnum} from "@shared/enums/sky-condiction.enum";
import {IForecast} from "../models/forecast";

@Injectable()
export class ForecastService {

    private readonly apiUrl: string;
    private readonly locations$: BehaviorSubject<Location[]>;

    constructor(private readonly http: HttpClient) {
        this.apiUrl = environment.API_URL;
        this.locations$ = new BehaviorSubject<Location[]>([])
    }

    get getLocations(): Observable<Location[]> {
        return this.locations$.asObservable();
    }

    getFiveDayForecastByZipCode(zipCode: string): Observable<Location[]> {
        const url = `${this.apiUrl}forecast/daily?cnt=5&zip=${zipCode},us&appid=${environment.API_KEY}`;
        return this.http.get<IForecast>(url)
            .pipe(
                filter(({list}) => !!list.length),
                map(({list, city}) => this.mapToLocation(list, city)),
                map((locations: Location[]) => locations.map(this.convertDate)),
                tap((locations: Location[]) => this.locations$.next(locations))
            );
    }

    private mapToLocation = (list: IWeatherData[], city: ICityInfo) =>
        list.map((w: IWeatherData) => ({
            name: city.name,
            skyCondiction: $enum(SkyStatusEnum).asValueOrDefault(w.weather[0].main.toLowerCase(), SkyStatusEnum.DEFAuLT),
            currentTemp: w.temp.min,
            minTemp: w.temp.min,
            maxTemp: w.temp.max,
            date: w.dt,
        })) as unknown as Location[]

    private convertDate = (location: Location) =>
        ({
            ...location,
            date: new Date(new Date(location.date).getTime() * 1000).toLocaleString("us", {
                day: "2-digit",
                weekday: "long",
                month: "short",
            })
        }) as unknown as Location;
}
