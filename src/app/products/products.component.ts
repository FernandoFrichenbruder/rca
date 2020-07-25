import { Component, OnInit } from '@angular/core';

import { products } from '../data/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = products;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(product){
    this.cartService.addToCart(product);
  }

}