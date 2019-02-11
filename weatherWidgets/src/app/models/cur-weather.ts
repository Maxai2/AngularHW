export class CurWeather {
  constructor(
    public name: string,
    public region: string,
    public country: string,
    public tz_id: string,
    public icon: string,
    public temp_c: number,
    public temp_f: number
  ) {}
}
