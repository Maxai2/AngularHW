export class VisitorCard {
  constructor(
    public id: number = 0,
    public visitorId: number = 0,
    public bookId: number = 0,
    public dateTookBook: Date = null,
    public dateReturneBook: Date = null
  ) {}
}
