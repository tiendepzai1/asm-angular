import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';



export interface Product {
  id : number,
  name : string,
  price : number,
  image : string,
  inStock : boolean
  quantity :number
}

@Injectable({
  providedIn: 'root'
})


export class ProductListService {
 private apiUrl = 'http://localhost:3001/products';
  constructor(private  http : HttpClient ) { }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }
}
