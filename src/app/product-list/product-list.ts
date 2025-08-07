import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../product-list-service';
import { Router } from '@angular/router'




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  title = 'product-list';
  productName = '';
  filterText = '';
  isAvailable = true;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProduct().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data
      },

      error: (err: any) => {
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
  const conf = confirm("Bạn có muốn xóa không?");
  if (conf) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(product => product.id !== id);
      },
      error: (err) => {
        console.error("Lỗi khi xóa sản phẩm:", err);
      }
    });
  }
}

}