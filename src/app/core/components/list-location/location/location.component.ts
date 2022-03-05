import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@shared/models/weather.model.";
import {WeatherService} from "@app/services";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


    @Input() zipCode: string;
    data: Location;

    constructor(private readonly weatherService: WeatherService) {
    }

    ngOnInit(): void {
        this.weatherService.getLocationByZipCode(this.zipCode)
            .subscribe(
                (data: Location) => this.data = data,
                (error: HttpErrorResponse) => {
                        this.weatherService.setZipCodeNotFound(error.message);
                        setTimeout(() => this.weatherService.setZipCodeNotFound(), 2000);
                }
            );

        const t = this.weatherService.getZipCodesValue;
        console.log(t);
    }

    removeLocation() {
        this.weatherService.removeZipCode(this.zipCode);
    }
}
