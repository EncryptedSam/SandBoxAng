import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book',
  template:`
  <button (click)="gotoLibrary()">Back</button>
  <h3>Book Details</h3>
  <p><b>Name:</b> {{book.name}}</p>
  <p><b>Price:</b> {{book.price | currency:"₹ "}}</p>
  <p><b>Description:</b> {{book.description}}</p>


  `,
  // templateUrl: './book.component.html',
  styles:[`
    button{
      margin-top:10px
    }
  `]
  // styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ls:LibraryService
  ) { }

  book;

  gotoLibrary() {
    this.router.navigate(['/lib']);
  }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.book = this.ls.books[id];
  }

}
