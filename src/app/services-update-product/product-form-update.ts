import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductFormUpdate {

  productForm : FormGroup ;

  constructor(private formBuilder : FormBuilder) { 
   this.productForm = this.formBuilder.group({
     name : ['',[Validators.required,Validators.minLength(6)]],
    price : ['',[Validators.required ,Validators.min(0)]],
    image : ['',[Validators.required]],
    quantity : ['',[Validators.required , Validators.minLength(1)]]
  } ,
)
}
}