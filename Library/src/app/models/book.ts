export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public publishYear: number,
    public publishPlace: string,
    public pageCount: number,
    public countInLibrary: number
  ) {}
}
