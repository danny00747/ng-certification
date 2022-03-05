import {NgModule} from '@angular/core';
import {FiveDayForecastComponent} from './components/five-day-forecast/five-day-forecast.component';
import {ForecastRoutingModule} from "./forecast-routing.module";
import {SharedModule} from "@shared/shared.module";
import {ForecastService} from "./services/forecast.service";
import {CanActivateGuard} from "./guards/can-activate.guard";


@NgModule({
    declarations: [FiveDayForecastComponent],
    imports: [
        SharedModule,
        ForecastRoutingModule
    ], providers: [ForecastService, CanActivateGuard]
})
export class ForecastModule {
}
