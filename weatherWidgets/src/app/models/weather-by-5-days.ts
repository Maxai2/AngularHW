import { WeatherByDay } from './weather-by-day';

export class WeatherBy5Days {
    constructor(
        public region: string,
        public country: string,
        public icon: string,
        public wind_mph: number,
        public precip_mm: number,
        public pressure_mb: number,
        public temp_c: number,
        public forecastList: WeatherByDay[]
    ) {}
}
