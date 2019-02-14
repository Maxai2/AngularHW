export class WeatherByDayFrom7 {
    constructor(
        public date: Date,
        public sunrise: string,
        public sunset: string,
        public moonrise: string,
        public moonset: string,
        public maxtemp_c: number,
        public mintemp_c: number,
        public avgtemp_c: number,
        public totalprecip_mm: number,
        public maxwind_kph: number
    ) {}
}

export class WeatherBy7Days {
    constructor(
        public name: string,
        public region: string,
        public country: string,
        public weatherBy7DaysList: WeatherByDayFrom7[]
    ) {}
}
