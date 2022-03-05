import {Pipe, PipeTransform} from '@angular/core';
import {SkyStatusEnum} from "@shared/enums/sky-condiction.enum";

@Pipe({
    name: 'weatherStatus'
})
export class WeatherStatusPipe implements PipeTransform {

    transform(value: string): SkyStatusEnum {
        switch (value) {
            case SkyStatusEnum.SUN:
                return SkyStatusEnum.SUN
            case SkyStatusEnum.RAIN:
                return SkyStatusEnum.RAIN
            case SkyStatusEnum.CLOUDS:
                return SkyStatusEnum.CLOUDS
            case SkyStatusEnum.SNOW:
                return SkyStatusEnum.SNOW
            case SkyStatusEnum.CLEAR:
                return SkyStatusEnum.SUN
            default:
                return SkyStatusEnum.SUN
        }
    }

}
