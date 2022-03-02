import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddLocationComponent} from './components/add-location/add-location.component';
import {ListLocationComponent} from './components/list-location/list-location.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "@app/interceptors/loading.interceptor";
import {WeatherService} from "@app/services/weather.service";
import {LoadingService} from "@app/services/loading.service";


@NgModule({
    declarations: [
        AddLocationComponent,
        ListLocationComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        WeatherService,
        LoadingService,
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
    ]
})
export class CoreModule {
}
