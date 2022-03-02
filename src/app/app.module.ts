import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from "./core/core.module";

@NgModule({
    imports:
        [
            BrowserModule,
            CoreModule,
            AppRoutingModule,
            HttpClientModule
        ],
    declarations:
        [
            AppComponent,
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
