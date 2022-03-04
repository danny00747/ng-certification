import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {WeatherService} from "@app/services";

@Component({
    selector: 'app-add-location',
    templateUrl: './add-location.component.html',
    styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

    zipCode: string;
    zipCodeNotFound$ = this.weatherService.getZipCodeNotFound;

    constructor(private readonly weatherService: WeatherService) {
    }

    ngOnInit(): void {
    }

    onSubmit(zipCodeForm: NgForm): void {
        this.weatherService.addZipCode(zipCodeForm.value.zipCode);
        zipCodeForm.reset();
        this.weatherService.getLocationByZipCode(zipCodeForm.value.zipCode);
    }
}
