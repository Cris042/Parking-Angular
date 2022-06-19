import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/Product';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/Products`;

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<Response<Product[]>> {
  //   return this.http.get<Response<Product[]>>(this.apiUrl);
  // }

  // getProduct(id: number): Observable<Response<Product>> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Response<Product>>(url);
  // }

  createProduct(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeProduct(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateProduct(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
