import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsAddedToCart: Product[] = [];
  //currentProductAddedToCart: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.productCart.subscribe((product: Product) => {
      //this.currentProductAddedToCart = product;
      this.productsAddedToCart.push(product);
      console.log(this.productsAddedToCart);
    });
  }

  removeFromCart(productToBeRemoved) {
    this.productService.productRemoveCart.next(productToBeRemoved);
    // this.products = this.products.
    const findIndexOfProduct = this.productsAddedToCart.findIndex(
      (p: Product) => p.productName === productToBeRemoved.productName
    );
    console.log(findIndexOfProduct);
    this.productsAddedToCart.splice(findIndexOfProduct, 1);
  }
}
