import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product-list-service';
import {Router} from '@angular/router'



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
    price : 1,
    inStock : true,
    quantity : 1,

  }

  constructor(private  productAddService : ProductService , private router : Router){}

  handleSubmit(){

    this.productAddService.getAddProduct(this.product).subscribe({
      next :(data) =>{
        console.log(data);
        alert("thêm thành công");
        this.router.navigate(["/product"]);
       
      },
      error : (err) =>{
        console.log(err);
      }

    })


  }

}
