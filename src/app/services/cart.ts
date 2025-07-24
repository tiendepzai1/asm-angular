// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  getItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: CartItem) {
    const existing = this.cartItems.find(p => p.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cartItems.push({ ...item });
    }
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  clearCart() {
    this.cartItems = [];
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.cartItems.find(p => p.id === id);
    if (item) item.quantity = quantity;
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
