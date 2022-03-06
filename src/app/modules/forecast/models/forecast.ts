import {FullWeatherDTO} from "@shared/models";
import {CityDTO} from "@shared/models";

export interface ForecastDTO {
    cod: string;
    message: number;
    cnt: number;
    list: FullWeatherDTO[];
    city: CityDTO;
}
