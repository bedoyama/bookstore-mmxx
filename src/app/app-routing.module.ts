import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookItemComponent } from './book-item/book-item.component';

const routes: Routes = [
  { path: 'book-item', component: BookItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
