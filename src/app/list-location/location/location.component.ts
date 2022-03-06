import {Component, Input, OnInit} from '@angular/core';
import {LocationDTO} from "@shared/models";
import {WeatherService} from "@app/services";
import {Observable} from "rxjs";

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
        this.locationDTO$ = this.weatherService.getLocationByZipCode(this.zipCode);
    }

    removeLocation(): void {
        this.weatherService.removeZipCode(this.zipCode);
    }
}
