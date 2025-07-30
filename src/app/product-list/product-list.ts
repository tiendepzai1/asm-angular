import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductListService ,Product } from '../product-list-service';




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {

 
 
   products: Product[] = [];



  title = 'product-list';
  productName = '';
  filterText = '';
  isAvailable = true;



  

  constructor(private productListService: ProductListService) { }

  ngOnInit() {
    this.productListService.getAllProduct().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data


      },

      error: (err) => {
        console.log(err);

      }
    })
  }


  handleClick() {
    alert('click');
  }

  filterProducts() {
    if (!this.filterText) return this.products;
    const text = this.filterText.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(text) ||
      product.id.toString().includes(text) ||
      product.price.toString().includes(text)
    );
  }

  removeProduct(id: number) {
    const conf = confirm("bạn có muốn xóa k");
    if (conf) {
      this.products = this.products.filter(product => product.id !== id);

    }
  }
}