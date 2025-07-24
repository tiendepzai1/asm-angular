import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  product = {
    id: 1,
    name: 'Laptop',
    price: 1000,
    image: 'https://picsum.photos/id/237/200/300',
    inStock: true,
    quantity: 5
  };

  total = 0;

  constructor() {
    this.updateTotal();
  }
updateTotal(): void {
  if (this.product) {
    this.total = this.product.price * this.product.quantity;
  }
}

  removeProduct() {
     const conf = confirm('bạn có chắc muốn xóa');
     if(conf){
        this.product = null as any;
    this.total = 0;
     }
  
  }

  checkout() {
    alert('Cảm ơn bạn đã đặt hàng!');
  }
 

}
