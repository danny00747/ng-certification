import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {CacheService} from "@app/classes/cache.service";
import {IWeatherData, Location} from "@shared/models/weather.model.";
import {SkyCondictionEnum} from "@shared/enums/sky-condiction.enum";
import {$enum} from 'ts-enum-util'
import {BehaviorSubject, Observable} from "rxjs";
import {filter, map, tap} from "rxjs/operators";


@Injectable()
export class WeatherService extends CacheService {

    private readonly apiUrl: string;
    private readonly zipCodes$: BehaviorSubject<Array<string>>;
    private readonly cachedZipCodes: Array<string>;
    private readonly zipCodeNotFound$: BehaviorSubject<string>;

    constructor(private readonly http: HttpClient) {
        super();
        this.apiUrl = environment.API_URL;
        this.zipCodes$ = new BehaviorSubject<Array<string>>([]);
        this.cachedZipCodes = localStorage.getItem('zipCodes')?.split(',') ?? [];
        this.zipCodes$.next(this.cachedZipCodes);
        this.zipCodeNotFound$ = new BehaviorSubject<string>(null);
    }

    get getZipCodes(): Observable<string[]> {
        return this.zipCodes$.asObservable();
    }

    get getZipCodeNotFound(): Observable<string> {
        return this.zipCodeNotFound$.asObservable();
    }

    setZipCodeNotFound(error?: string) {
        this.zipCodeNotFound$.next(error) ;
    }

    checkDuplicateZipCode(zipCode: string): boolean {
        return this.cachedZipCodes.indexOf(zipCode) === -1;
    }

    addZipCode(zipCode: string): void {
        this.cachedZipCodes.push(zipCode);
        this.setItem('zipCodes', this.cachedZipCodes.toString());
        this.zipCodes$.next(this.cachedZipCodes);
    }

    getLocationByZipCode(zipCode: string): Observable<Location> {
        const url = `${this.apiUrl}weather?zip=${zipCode},us&appid=${environment.API_KEY}`;
        return this.http.get<IWeatherData>(url)
            .pipe(
                filter(({weather}: IWeatherData) => !!weather),
                map(({weather, main, name}: IWeatherData) =>
                    ({
                        name: name,
                        skyCondiction: $enum(SkyCondictionEnum).asValueOrDefault(weather[0].main.toLocaleLowerCase(), SkyCondictionEnum.DEFAuLT),
                        currentTemp: main.temp,
                        minTemp: main.temp_min,
                        maxTemp: main.temp_max
                    }) as unknown as Location
                ),
                tap(() => this.zipCodeNotFound$.next(null)),
            );
    }


}
