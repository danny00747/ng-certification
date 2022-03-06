import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';
import {WeatherService} from "@app/services";

@Injectable()
export class CanLoadGuard implements CanLoad {

    constructor(
        private readonly weatherService: WeatherService,
        private readonly router: Router
    ) {
    }

    async canLoad(): Promise<boolean> {
        if (this.weatherService.getZipCodesValue.length > 0) {
            return true
        } else {
            await this.router.navigate(['/']);
            return false
        }
    }
}
