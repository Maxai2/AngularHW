export class Book {
  constructor(
    public id: number = 0,
    public title: string = '',
    public author: string = '',
    public publishYear: number = 0,
    public publishPlace: string = '',
    public pageCount: number = 0,
    public countInLibrary: number = 0
  ) {}
}
