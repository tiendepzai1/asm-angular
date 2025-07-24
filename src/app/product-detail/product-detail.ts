import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product = {
    id: 1,
    name: 'Laptop',
    price: 1000,


    image:
      'https://picsum.photos/id/237/200/300',

    inStock: true,
    quantity : 5 ,
  };
}