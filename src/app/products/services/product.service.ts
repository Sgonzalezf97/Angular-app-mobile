import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable, catchError, of } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor(private http: HttpClient) { }

  private baseUrl: string= environments.baseUrl;

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }

  getProductById(id: string):Observable<Product | undefined>{
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
    .pipe(
      catchError(error => of(undefined)) //se pone el of para volver el undefined un observable .
    )
  }

  getSuggestions(query:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?q=${query}&_limit=6`);
  }
}
