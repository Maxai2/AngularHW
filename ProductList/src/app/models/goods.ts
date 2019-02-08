export class Goods {
    constructor(
        public id: number = 0,
        public Name: string = '',
        public Price: number = 0,
        public Category: string = '',
        public canBuy: boolean = false,
        public Count: number = 0,
        public expireDate: Date = new Date()) {}
}
