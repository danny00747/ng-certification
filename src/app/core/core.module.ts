import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "@app/interceptors/loading.interceptor";
import {WeatherService} from "@app/services";
import {LoadingService} from "@app/services";
import {SharedModule} from "@shared/shared.module";
import {CanLoadGuard} from "@app/guards/can-load.guard";
import {ErrorInterceptor} from "@app/interceptors/error.interceptor";


@NgModule({
    imports: [
        SharedModule
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
