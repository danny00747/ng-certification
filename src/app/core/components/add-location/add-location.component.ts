import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoadingService, WeatherService} from "@app/services";

@Component({
    selector: 'app-add-location',
    templateUrl: './add-location.component.html',
    styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

    zipCode: string;
    zipCodeNotFound$ = this.weatherService.getZipCodeNotFound;
    loading$ =  this.loadingService.isLoading;

    constructor(private readonly weatherService: WeatherService, private readonly loadingService: LoadingService) {
    }

    ngOnInit(): void {
    }

    onSubmit(zipCodeForm: NgForm): void {
        this.weatherService.addZipCode(zipCodeForm.value.zipCode);
        zipCodeForm.reset();
        this.weatherService.getLocationByZipCode(zipCodeForm.value.zipCode);
    }
}
