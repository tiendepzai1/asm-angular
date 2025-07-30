import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-update.html',
  styleUrls: ['./product-update.css'], // <-- sửa `styleUrl` thành `styleUrls`
})
export class ProductUpdate {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });
  }

  handleSubmit() {
    if (this.productForm.valid) {
      console.log('Form value:', this.productForm.value);
    } else {
      console.warn('Form invalid:', this.productForm.errors);
    }
  }
}
