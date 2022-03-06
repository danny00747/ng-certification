import {SkyStatusEnum} from "@shared/enums/sky-condiction.enum";

export interface LocationDTO {
    name: string;
    skyCondiction: SkyStatusEnum;
    currentTemp?: number;
    maxTemp: number;
    minTemp: number;
    date?: number;
}
