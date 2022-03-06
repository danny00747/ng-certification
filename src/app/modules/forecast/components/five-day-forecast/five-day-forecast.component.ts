import { Component, OnInit } from '@angular/core';
import {ForecastService} from "../../services/forecast.service";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, filter, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {

  locations$ = this.forecastService.getLocations;

  constructor(
      private readonly forecastService: ForecastService,
      private readonly route: ActivatedRoute,
      private readonly router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
        filter(params => !!params.id),
        switchMap(params => this.forecastService.getFiveDayForecastByZipCode(params.id)),
        catchError(() => this.router.navigate(['/']))
    ).subscribe();
  }
}
