import {SkyStatusEnum} from "@shared/enums/sky-condiction.enum";

export interface ICoord {
    lon: string;
    lat: string;
}

export interface ICityInfo {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IMainWeather {
    temp: string;
    feels_like: string;
    temp_min: string;
    temp_max: string;
    pressure: string;
    sea_level?: string;
    grnd_level?: string;
    humidity: string;
    temp_fk?: string;
}

export interface ITemp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    monr: number;
}


export interface IWind {
    speed: string;
    deg: string;
}

export interface ISysInfo {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface IWeatherData {
    coord: ICoord;
    weather: IWeather[];
    base: string;
    main: IMainWeather;
    visibility: string;
    wind: IWind;
    rain: string;
    clouds: string;
    dt: number;
    sys: ISysInfo;
    timezone: string;
    id: number;
    name: string;
    cod: number;
    temp?: ITemp;
    pop?: string;
    dt_text: string;
    iconUrl?: string;
    condition?: string;
    description?: string;
    weekDay?: string;
}

export interface Location {
    name: string;
    skyCondiction: SkyStatusEnum;
    currentTemp?: number;
    maxTemp: number;
    minTemp: number;
    date?: Date;
}

