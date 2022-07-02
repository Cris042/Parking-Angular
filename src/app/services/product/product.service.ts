import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseApiUrl = 'http://localhost:8080';
  private apiUrl = `${this.baseApiUrl}/employee`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`);
  }

  getProduct(id: number, formData: FormData ): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/update/${id}`, formData);
  }

  createProduct(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.apiUrl}/add`, formData);
  }

  removeProduct(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  
}
