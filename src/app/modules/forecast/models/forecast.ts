import {ICityInfo, IWeatherData} from "@shared/models/weather.model.";

export interface IForecast {
    cod: string;
    message: number;
    cnt: number;
    list: Array<IWeatherData>;
    city: ICityInfo;
}
