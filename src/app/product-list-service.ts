import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Product {
  id: number, // ? tác dụng trường đó có thể có hoặc không
  name: string,
  price: number,
  image: string,
  inStock: boolean
  quantity: number
}
export interface ProductAdd {
  // ? tác dụng trường đó có thể có hoặc không
  name: string,
  price: number,
  image: string,
  inStock: boolean
  quantity: number
}

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private apiUrl = 'http://localhost:3001/products';
  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  getAddProduct(product: ProductAdd): Observable<ProductAdd> {
    return this.http.post<ProductAdd>(this.apiUrl, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  updateProduct(id: number, product: ProductAdd): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }


}
