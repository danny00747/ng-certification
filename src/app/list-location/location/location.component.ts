import {Component, Input, OnInit} from '@angular/core';
import {LocationDTO} from "@shared/models";
import {WeatherService} from "@app/services";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


    @Input() zipCode: string;
    locationDTO: LocationDTO;

    constructor(private readonly weatherService: WeatherService) {
    }

    ngOnInit(): void {
        this.weatherService.getLocationByZipCode(this.zipCode)
            .subscribe(
                (data: LocationDTO) => this.locationDTO = data,
                (error: HttpErrorResponse) => {
                    this.weatherService.setZipCodeNotFound(error.message);
                    setTimeout(() => this.weatherService.setZipCodeNotFound(), 2000);
                }
            );
    }

    removeLocation(): void {
        this.weatherService.removeZipCode(this.zipCode);
    }
}
