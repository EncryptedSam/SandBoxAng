import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books;

  newBook:Book = new Book(null, null, null);
  constructor(private ls:LibraryService, private router: Router) { 
    this.books = this.ls.books;
  }

  edit(i:number):void{
    this.router.navigate(['/book-edit',i]);
  }

  delete(i:number):void{
    this.ls.books.splice(i,1);
  }

  view(i:number):void{
    this.router.navigate(['/book',i]);
  }

  add(){
    this.books.push(new Book(this.newBook.name, this.newBook.price, this.newBook.description));
  }

  ngOnInit(): void {
  }

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