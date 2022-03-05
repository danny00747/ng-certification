import {Component, Input, OnInit} from '@angular/core';
import {SkyStatusEnum} from "@shared/enums/sky-condiction.enum";
import {environment} from "@environments/environment";

@Component({
    selector: 'app-weather-icon',
    templateUrl: './weather-icon.component.html',
    styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {

    @Input() skyCondition: SkyStatusEnum;
    @Input() icon: boolean;
    imageSrc: string;

    constructor() {
    }

    ngOnInit(): void {
        this.imageSrc = `${environment.ICON_URL}${this.skyCondition}.png`;
    }
}
