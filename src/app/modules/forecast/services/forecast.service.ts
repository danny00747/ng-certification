import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {FullWeatherDTO, LocationDTO} from "@shared/models";
import {filter, map, tap} from "rxjs/operators";
import {$enum} from "ts-enum-util";
import {SkyStatusEnum} from "@shared/enums/sky-condiction.enum";
import {ForecastDTO} from "../models/forecast";
import {CityDTO} from "@shared/models/city";

@Injectable()
export class ForecastService {

    private readonly apiUrl: string;
    private readonly locations$: BehaviorSubject<LocationDTO[]>;

    constructor(private readonly http: HttpClient) {
        this.apiUrl = environment.API_URL;
        this.locations$ = new BehaviorSubject<LocationDTO[]>([])
    }

    get getLocations(): Observable<LocationDTO[]> {
        return this.locations$.asObservable();
    }

    getFiveDayForecastByZipCode(zipCode: string): Observable<LocationDTO[]> {
        const url = `${this.apiUrl}forecast/daily?cnt=${environment.NUMBER_OF_DAYS}&zip=${zipCode},us&appid=${environment.API_KEY}`;
        return this.http.get<ForecastDTO>(url)
            .pipe(
                filter(({list}) => !!list.length),
                map(({list, city}) => this.mapToLocationDTO(list, city)),
                tap((locations: LocationDTO[]) => this.locations$.next(locations))
            );
    }

    private mapToLocationDTO = (list: FullWeatherDTO[], city: CityDTO) =>
        list.map((w: FullWeatherDTO) => ({
            name: city.name,
            skyCondiction: $enum(SkyStatusEnum).asValueOrDefault(w.weather[0].main.toLowerCase(), SkyStatusEnum.DEFAuLT),
            minTemp: w.temp.min,
            maxTemp: w.temp.max,
            date: w.dt,
        })) as unknown as LocationDTO[];
}
