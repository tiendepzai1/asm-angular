  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { ProductService, ProductAdd, Product } from '../product-list-service';
  import { FormsModule, NgForm } from '@angular/forms';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-product-update',
    templateUrl: './product-update.html',
    styleUrls: ['./product-update.css'],
    standalone: true,
    imports: [FormsModule, CommonModule]
  })
  export class ProductUpdate implements OnInit {
    productId!: number;
    product: ProductAdd = {
      name: '',
      price: 0,
      image: '',
      inStock: true,
      quantity: 0
    };

    constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private router: Router
    ) {}

    ngOnInit(): void {
      this.productId = Number(this.route.snapshot.paramMap.get('id'));

      this.productService.getProductById(this.productId).subscribe({
        next: (data: Product) => {
          this.product = {
            name: data.name,
            price: data.price,
            image: data.image,
            inStock: data.inStock,
            quantity: data.quantity
          };
        },
        error: (err) => {
          console.error('Không tìm thấy sản phẩm:', err);
          alert('Sản phẩm không tồn tại!');
          this.router.navigate(['/product']);
        }
      });
    }

    handleUpdate(form: NgForm): void {
      if (form.valid) {
        this.productService.updateProduct(this.productId, this.product).subscribe({
          next: () => {
            alert('Cập nhật thành công!');
            this.router.navigate(['/product']);
          },
          error: (err :any) => {
            alert('Lỗi khi cập nhật!');
            console.error(err);
          }
        });
      } else {
        alert('Form không hợp lệ!');
      }
    }
  }
