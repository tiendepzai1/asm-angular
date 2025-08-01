import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product-list-service';



@Component({
  selector: 'app-product-create',
  imports: [FormsModule,CommonModule],

templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {
  product ={
    id : 0 ,
    name : "",
    image : "",
    price : 1,
    inStock : true,
    quantity : 1,

  }

  constructor(private  productAddService : ProductService){}

  handleSubmit(){
    this.productAddService.getAddProduct(this.product).subscribe({
      next :(data) =>{
        console.log(data);
       
      },
      error : (err) =>{
        console.log(err);
      }

    })


  }

}
