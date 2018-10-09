import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCart = new Subject<Product>();
  productRemoveCart = new Subject<Product>();

  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get('assets/products.json');
  }

  // getProductCartListener() {
  //   return this.productCart.asObservable();
  // }
}
