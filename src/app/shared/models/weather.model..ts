
export interface WeatherDTO {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainWeatherDTO {
    temp: string;
    temp_min: string;
    temp_max: string;
}

export interface TempDTO {
    min: number;
    max: number;
}

export interface FullWeatherDTO {
    weather: WeatherDTO[];
    main: MainWeatherDTO;
    dt: number;
    name: string;
    temp?: TempDTO;
}



