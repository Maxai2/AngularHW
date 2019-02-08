export class TimeElem {
  constructor (private hour: number, private minute: number, private second: number) {
  }

  toString() {
    return `${this.hour < 10 ? '0' + this.hour : this.hour}:${this.minute < 10 ? '0' + this.minute : this.minute}:${this.second < 10 ? '0' + this.second : this.second}`;
  }

  subscribeSecond (): boolean {
    if (this.second !== 0) {
      this.second--;
      return true;
    }
    return false;
  }

  addSecond() {
    this.second++;
  }
}
