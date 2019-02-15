export class VisitorCard {
  constructor(
    public id: number,
    public visitorId: number,
    public bookId: number,
    public dateTookBook: Date,
    public dateReturneBook: Date
  ) {}
}
