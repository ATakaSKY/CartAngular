import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();

    this.productService.productRemoveCart.subscribe((product: Product) => {
      //this.currentProductAddedToCart = product;
      this.products.push(product);
    });
  }

  loadProducts() {
    this.productService
      .fetchProducts()
      .subscribe((productResponse: Product[]) => {
        this.products = productResponse;
        console.log(this.products);
      });
  }

  addToCart(product: Product) {
    this.productService.productCart.next(product);
    // this.products = this.products.
    const findIndexOfProduct = this.products.findIndex(
      (p: Product) => p.productName === product.productName
    );
    console.log(findIndexOfProduct);
    this.products.splice(findIndexOfProduct, 1);
  }
}
