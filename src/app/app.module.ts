import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from "@app/core.module";

@NgModule({
    imports:
        [
            BrowserModule,
            CoreModule,
            AppRoutingModule
        ],
    declarations:
        [
            AppComponent,
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
