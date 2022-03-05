import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidZipCodePipe} from './pipes/valid-zip-code.pipe';
import {WeatherIconComponent} from './components/weather-icon/weather-icon.component';
import {WeatherStatusPipe} from './pipes/weather-status.pipe';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [ValidZipCodePipe, WeatherIconComponent, WeatherStatusPipe],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ], exports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        ValidZipCodePipe,
        WeatherIconComponent,
        WeatherStatusPipe
    ]
})
export class SharedModule {
}
