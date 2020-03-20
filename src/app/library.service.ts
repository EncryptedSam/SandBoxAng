import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {


  public books:Book[] = [
    new Book("Nineteen Eighty-Four",94,"Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian novel by English novelist George Orwell. It was published in June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime."),
    new Book("The Great Gatsby",79,"The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922")
  ];

  constructor() { }

}


class Book{
  name:string;
  price:number;
  description:string;
  constructor(n:string, p:number, d:string){
    this.name = n;
    this.price = p;
    this.description = d;
  }
}