import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  title = 'product-list';
  productName = '';
  filterText = '';
  isAvailable = true;

  products = [
    { id: 1, name: 'Laptop', price: 1000, inStock: true },
    { id: 2, name: 'Phone', price: 500, inStock: false },
    { id: 3, name: 'Tablet', price: 300, inStock: true },
  ];

  handleClick() {
    alert('click');
  }

  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
     product.id.toString().includes(this.filterText.toLocaleLowerCase()) ||
     product.price.toString().includes(this.filterText.toLocaleLowerCase())
    );
  }
}