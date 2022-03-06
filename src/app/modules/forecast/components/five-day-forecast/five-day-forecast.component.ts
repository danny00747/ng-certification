import {Component, OnInit} from '@angular/core';
import {ForecastService} from "../../services/forecast.service";
import {ActivatedRoute} from "@angular/router";
import {catchError, filter, switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {LocationDTO} from "@shared/models";

@Component({
    selector: 'app-five-day-forecast',
    templateUrl: './five-day-forecast.component.html',
    styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent {

    locations$: Observable<LocationDTO[]> = this.route.params.pipe(
        filter(params => !!params.id),
        switchMap(params => this.forecastService.getFiveDayForecastByZipCode(params.id)),
        catchError(() => of([]))
    );

    constructor(
        private readonly forecastService: ForecastService,
        private readonly route: ActivatedRoute) {
    }
}
