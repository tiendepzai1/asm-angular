import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  title = 'product-list';
  productName = '';
  filterText = '';
  isAvailable = true;

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


  handleClick() {
    alert('click');
  }

  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
     product.id.toString().includes(this.filterText.toString()) ||
     product.price.toString().includes(this.filterText.toLocaleLowerCase())
    );
  }
  removeProduct(id : number){
    const conf = confirm("bạn có muốn xóa k");
    if(conf){
        this.products = this.products.filter(product=>product.id !==id);
        
    }
  }
}