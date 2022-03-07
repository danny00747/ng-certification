import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {CacheService} from "@app/classes/cache.service";
import {FullWeatherDTO, LocationDTO, MainWeatherDTO, WeatherDTO} from "@shared/models";
import {SkyStatusEnum} from "@shared/enums/sky-condiction.enum";
import {$enum} from 'ts-enum-util'
import {BehaviorSubject, Observable} from "rxjs";
import {filter, map} from "rxjs/operators";


@Injectable()
export class WeatherService extends CacheService {

    private static readonly LOCAL_STORAGE_KEY = 'ZIPCODES';
    private readonly apiUrl: string;
    private readonly zipCodes$: BehaviorSubject<Array<string>>;
    private readonly cachedZipCodes: Array<string>;
    private readonly zipCodeNotFound$: BehaviorSubject<string>;

    constructor(private readonly http: HttpClient) {
        super();

        this.apiUrl = environment.API_URL;
        this.zipCodes$ = new BehaviorSubject<Array<string>>([]);
        this.cachedZipCodes = this.getItem(WeatherService.LOCAL_STORAGE_KEY)?.split(',') ?? [];
        this.zipCodes$.next(this.cachedZipCodes);
        this.zipCodeNotFound$ = new BehaviorSubject<string>(null);
    }

    get getZipCodes(): Observable<string[]> {
        return this.zipCodes$.asObservable();
    }

    get getZipCodesValue(): string[] {
        return this.zipCodes$.value;
    }

    get getZipCodeNotFound(): Observable<string> {
        return this.zipCodeNotFound$.asObservable();
    }

    addZipCode(zipCode: string): void {
        this.cachedZipCodes.push(zipCode);
        this.setItem(WeatherService.LOCAL_STORAGE_KEY, this.cachedZipCodes.toString());
        this.zipCodes$.next(this.cachedZipCodes);
    }

    getLocationByZipCode(zipCode: string): Observable<LocationDTO> {
        return this.http.get<FullWeatherDTO>(`${this.apiUrl}/weather`, {
            params: {
                zip: zipCode,
                appid: environment.API_KEY
            }
        })
            .pipe(
                filter(({weather}: FullWeatherDTO) => !!weather),
                map(({weather, main, name}) => this.mapToLocationDTO(weather, main, name))
            );
    }

    displayError(error: string) {
        this.zipCodeNotFound$.next(error);
        setTimeout(() => this.zipCodeNotFound$.next(null), 2000);
    }

    removeZipCode(zipcode: string) {
        if (this.cachedZipCodes.length === 1) {
            this.cachedZipCodes.splice(this.cachedZipCodes.indexOf(zipcode), 1);
            this.zipCodes$.next(this.cachedZipCodes);
            this.clear();
        } else {
            this.cachedZipCodes.splice(this.cachedZipCodes.indexOf(zipcode), 1);
            this.removeValue(WeatherService.LOCAL_STORAGE_KEY, zipcode);
            this.zipCodes$.next(this.cachedZipCodes);
        }
    }

    checkDuplicateZipCode(zipCode: string): boolean {
        return this.cachedZipCodes.indexOf(zipCode) === -1;
    }

    private mapToLocationDTO = (weather: WeatherDTO[], main: MainWeatherDTO, name: string) =>
        ({
            name: name,
            skyCondiction: $enum(SkyStatusEnum).asValueOrDefault(weather[0].main.toLocaleLowerCase(), SkyStatusEnum.DEFAuLT),
            currentTemp: main.temp,
            minTemp: main.temp_min,
            maxTemp: main.temp_max
        }) as unknown as LocationDTO;

}
