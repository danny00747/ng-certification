import {NgModule} from '@angular/core';
import {AddLocationComponent} from './components/add-location/add-location.component';
import {ListLocationComponent} from './components/list-location/list-location.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "@app/interceptors/loading.interceptor";
import {WeatherService} from "@app/services";
import {LoadingService} from "@app/services";
import {SharedModule} from "@shared/shared.module";
import {LocationComponent} from './components/list-location/location/location.component';
import {CanLoadGuard} from "@app/guards/can-load.guard";
import {ErrorInterceptor} from "@app/interceptors/error.interceptor";


@NgModule({
    declarations: [
        AddLocationComponent,
        ListLocationComponent,
        LocationComponent
    ],
    imports: [
        FormsModule, SharedModule
    ],
    providers: [
        WeatherService,
        LoadingService,
        CanLoadGuard,
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
    ]
})
export class CoreModule {
}
