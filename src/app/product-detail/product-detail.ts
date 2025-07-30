

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  imports: [CurrencyPipe, CommonModule],
  styleUrl: './product-detail.css'

})
export class ProductDetail implements OnInit {
  productId!: number;
  product: any;


  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      image: 'https://picsum.photos/id/101/200/300',
      inStock: true,
      quantity: 5
    },
    {
      id: 2,
      name: 'Phone',
      price: 500,
      image: 'https://picsum.photos/id/102/200/300',
      inStock: false,
      quantity: 0
    },
    {
      id: 3,
      name: 'Tablet',
      price: 300,
      image: 'https://picsum.photos/id/103/200/300',
      inStock: true,
      quantity: 10
    }
  ];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((p) => p.id === this.productId);
  }
}
