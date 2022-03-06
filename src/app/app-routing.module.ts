import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddLocationComponent} from "./add-location/add-location.component";
import {CanLoadGuard} from "@app/guards/can-load.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AddLocationComponent
    },
    {
        path: 'forecast',
        loadChildren: () => import('./modules/forecast/forecast.module').then(m => m.ForecastModule),
        canLoad: [CanLoadGuard],
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
