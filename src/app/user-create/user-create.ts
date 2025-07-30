import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-create.html',
  styleUrls: ['./user-create.css']
})
export class UserCreate {
  user = {
    name: '',
    email: '',
    role: '',
    sdt: '',
    diachi: ''
  };

  handleSubmit() {
    console.log(this.user);
  }
}
