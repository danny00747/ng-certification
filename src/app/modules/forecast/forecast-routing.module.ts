import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FiveDayForecastComponent} from "./components/five-day-forecast/five-day-forecast.component";
import {CanActivateGuard} from "./guards/can-activate.guard";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/'},
    {path: ':id', component: FiveDayForecastComponent, canActivate: [CanActivateGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForecastRoutingModule {
}
