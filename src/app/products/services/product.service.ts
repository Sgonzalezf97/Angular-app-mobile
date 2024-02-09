import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor(private http: HttpClient) { }

  private baseUrl: string= environments.baseUrl;

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }
}
