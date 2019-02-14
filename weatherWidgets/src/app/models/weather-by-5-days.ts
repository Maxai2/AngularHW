export class WeatherByDay {
    constructor(
        public date: Date,
        public icon: string,
        public avgtemp_c: number
    ) {}
}

export class WeatherBy5Days {
    constructor(
        public region: string,
        public country: string,
        public icon: string,
        public text: string,
        public wind_mph: number,
        public precip_mm: number,
        public pressure_mb: number,
        public temp_c: number,
        public forecastList: WeatherByDay[]
    ) {}
}
