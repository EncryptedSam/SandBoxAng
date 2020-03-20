import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { ParentComponent } from './parent/parent.component';
import { BookComponent } from './book/book.component';
import { BookEditComponent } from './book-edit/book-edit.component';


const routes: Routes = [
  {path:'lib',component:LibraryComponent},
  {path:'io',component:ParentComponent},
  {path:'book/:id',component:BookComponent},
  {path:'book-edit/:id',component:BookEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
