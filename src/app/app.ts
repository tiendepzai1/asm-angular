import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent,CategoryList,User],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'my-angular-app';
}
