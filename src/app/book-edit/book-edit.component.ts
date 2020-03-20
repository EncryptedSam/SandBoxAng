import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-edit',
  template:`
    <button class="back-btn" (click)="gotoLibrary()">Back</button>
    <h3>Edit - Book</h3>

    <div class="grid-container">
      <div class="item1">
          <input type="text" placeholder="Book Name" [(ngModel)]=book.name />
      </div>
      <div class="item2">
          <input type="text" placeholder="Book Price" [(ngModel)]=book.price />
      </div>
      <div class="item3">
          <textarea rows="5" [(ngModel)]=book.description ></textarea>
      </div>
      <div class="item4">
          <button (click)=updateBook()>Update</button>
      </div>
    </div>
    
    <h3>View Changes</h3>

    <p><b>Name:</b> {{ls.books[bookId].name}}</p>
    <p><b>Price:</b> {{ls.books[bookId].price | currency:"₹ "}}</p>
    <p><b>Description:</b> {{ls.books[bookId].description}}</p>
    
  `,
  // templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public ls:LibraryService
  ) { }


  book;
  bookId;

  gotoLibrary() {
    this.router.navigate(['/lib']);
  }

  updateBook(){
    this.ls.books[this.bookId] = Object.assign({}, this.book);
  }

  ngOnInit(): void {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.book = Object.assign({}, this.ls.books[this.bookId]);
  }

}
