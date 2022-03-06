import {FullWeatherDTO} from "@shared/models/weather.model.";
import {CityDTO} from "@shared/models/city";

export interface ForecastDTO {
    cod: string;
    message: number;
    cnt: number;
    list: FullWeatherDTO[];
    city: CityDTO;
}
