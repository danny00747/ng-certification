import {Pipe, PipeTransform} from '@angular/core';
import {WeatherService} from "@app/services";

@Pipe({
    name: 'validZipCode'
})
export class ValidZipCodePipe implements PipeTransform {
    constructor(private readonly weatherService: WeatherService) {
    }

    transform(value: string): boolean {
        return this.weatherService.checkDuplicateZipCode(value);
    }

}
