import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/users'; 

  constructor(private http: HttpClient) { }

  register(userData: RegisterUser): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  login(email: string, password: string): Observable<any> {
    // json-server supports filtering with ?email=...&password=...
    return this.http.get<any[]>(`${this.apiUrl}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  }
}
