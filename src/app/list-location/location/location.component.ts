import {Component, Input, OnInit} from '@angular/core';
import {LocationDTO} from "@shared/models";
import {WeatherService} from "@app/services";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


    @Input() zipCode: string;
    locationDTO$: Observable<LocationDTO>;

    constructor(private readonly weatherService: WeatherService) {
    }

    ngOnInit(): void {
        this.locationDTO$ = this.weatherService.getLocationByZipCode(this.zipCode)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.weatherService.setZipCodeNotFound(error.message);
                    setTimeout(() => this.weatherService.setZipCodeNotFound(), 2000);
                    return of(null);
                }));
    }

    removeLocation(): void {
        this.weatherService.removeZipCode(this.zipCode);
    }
}
