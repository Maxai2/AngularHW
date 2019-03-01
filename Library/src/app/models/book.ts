export class Book {
  constructor(
    public id: number = 0,
    public title: string = '',
    public author: string = '',
    public publishYear: number = 1900,
    public publishPlace: string = '',
    public pageCount: number = 5,
    public countInLibrary: number = 1
  ) {}
}
