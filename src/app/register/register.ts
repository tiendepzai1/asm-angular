import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit = () => {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;

      this.authService.register(formValue).subscribe({
        next: () => {
          console.log('Đăng ký thành công');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Lỗi khi đăng ký:', err);
        }
      });
    } else {
      console.warn('Form không hợp lệ');
    }
  }
}
