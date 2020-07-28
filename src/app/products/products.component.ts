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
  amount: number;
  toggle: boolean = false;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.amount = this.cartService.getAmount();
  }

  addToCart(product){
    this.cartService.addToCart(product);
    this.changeButtonColor(product);
    this.amount = this.cartService.getAmount();
  }

  changeButtonColor(product){
    console.log(product)
    let items = this.cartService.getItems();
    if (items.some(item => item.product.id == product.id )) {
       product.added = true;
    }
  }

  

}