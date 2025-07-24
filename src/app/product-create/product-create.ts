import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product-create',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {
  product ={
    name : "",
    image : "",
    price : "",

  }

  handleSubmit(){
    console.log(this.product.name)


  }

}
