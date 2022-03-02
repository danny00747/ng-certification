import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {CacheService} from "./cache.service";

@Injectable()
export class WeatherService extends CacheService {

    private serverUrl: string;

    constructor(private readonly http: HttpClient) {
        super();
        this.serverUrl = environment.API_URL;
    }

}
