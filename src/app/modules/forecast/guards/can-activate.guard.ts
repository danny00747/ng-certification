import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {WeatherService} from "@app/services";

@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(
        private readonly weatherService: WeatherService,
        private readonly router: Router
    ) {
    }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        if (this.weatherService.getZipCodesValue.includes(route.paramMap.get('id'))) {
            return true
        } else {
            await this.router.navigate(['/']);
            return false
        }
    }
}
