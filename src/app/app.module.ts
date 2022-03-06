import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from "@app/core.module";
import {AddLocationComponent} from "./add-location/add-location.component";
import {LocationComponent} from "./list-location/location/location.component";
import {ListLocationComponent} from "./list-location/list-location.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        AddLocationComponent,
        ListLocationComponent,
        LocationComponent
    ],
    imports:
        [
            BrowserModule,
            CoreModule,
            FormsModule,
            SharedModule,
            AppRoutingModule
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
