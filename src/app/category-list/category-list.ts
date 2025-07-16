import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {

  categorys =[
    {id : 1 , name : 'category1'},
    {id : 2 , name : 'category2'}

  ]

}
