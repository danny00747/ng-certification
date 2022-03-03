import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddLocationComponent} from './components/add-location/add-location.component';
import {ListLocationComponent} from './components/list-location/list-location.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "@app/interceptors/loading.interceptor";
import {WeatherService} from "@app/services";
import {LoadingService} from "@app/services";
import {SharedModule} from "@shared/shared.module";
import { LocationComponent } from './components/list-location/location/location.component';


@NgModule({
    declarations: [
        AddLocationComponent,
        ListLocationComponent,
        LocationComponent
    ],
    imports: [
        CommonModule,
        FormsModule, SharedModule
    ],
    providers: [
        WeatherService,
        LoadingService,
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
    ]
})
export class CoreModule {
}
