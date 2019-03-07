import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    new Book(1, 'Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C. Martin', 2008, 'Prentice Hall', 464, 18),
    new Book(2, "Clean Architecture: A Craftsman's Guide to Software Structure and Design", 'Robert C. Martin', 2017, 'Prentice Hall', 432, 122),
    new Book(3, 'Grokking Algorithms: An illustrated guide for programmers and other curious people', 'Aditya Y. Bhargava', 2016, 'Manning Publications', 256, 25),
    new Book(4, 'Head First Design Patterns: A Brain-Friendly Guide', 'Eric Freeman; Bert Bates; Kathy Sierra; Elisabeth Robson', 2004, "O'Reilly Media", 694, 89),
    new Book(5, 'Test Driven Development: By Example', 'Kent Beck', 2002, 'Addison-Wesley Professional', 240, 73),
    new Book(6, "Soft Skills: The software developer's life manual", 'John Sonmez', 2014, 'Manning Publications', 504, 51),
    new Book(7, 'Cracking the Coding Interview: 189 Programming Questions and Solutions', 'Gayle Laakmann McDowell', 2015, 'CareerCup', 706, 21),
    new Book(8, 'Seven Languages in Seven Weeks: A Pragmatic Guide to Learning Programming Languages', 'Bruce Tate', 2010, 'Pragmatic Bookshelf', 330, 94),
    new Book(9, 'Programming Elixir ≥ 1.6: Functional |> Concurrent |> Pragmatic |> Fun', 'Dave Thomas', 2018, 'Pragmatic Bookshelf', 398, 62),
    new Book(10, 'Go Programming Blueprints: Build real-world, production-ready solutions in Go using cutting-edge technology and techniques, 2nd Edition', 'Mat Ryer', 2016, 'Packt Publishing', 394, 38)
  ];

  curYear: number;

  constructor() {
    const tempDate = new Date();
    this.curYear = tempDate.getFullYear();

    if (localStorage.getItem('books') === null) {
      localStorage.setItem('books', JSON.stringify(this.books));
    } else {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  getBooks() {
    return this.books;
  }

  getBooksTitle() {
    const bookNames: string[] = [];
    this.books.forEach(v => {
      if (v.countInLibrary !== 0) {
        bookNames.push(v.title);
      }}
    );
    return bookNames;
  }

  getBook(bookId: number) {
    return this.books.find(b => b.id ===  bookId);
  }

  getBookNameById (bookId: number) {
    return this.books.find(b => b.id === bookId).title;
  }

  addBook(book: Book) {
    book.id = this.books[this.books.length - 1].id + 1;
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // editBook(bookId: number, book: Book) {
  //   const editableBook = this.books.find(b => b.id === bookId);

  //   editableBook.author = book.author;
  //   editableBook.countInLibrary = book.countInLibrary;
  //   editableBook.pageCount = book.pageCount;
  //   editableBook.publishPlace = book.publishPlace;
  //   editableBook.publishYear = book.publishYear;
  //   editableBook.title = book.title;
  // }

  removeBook(bookId: number) {
    this.books.splice(this.books.findIndex(b => b.id === bookId), 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
