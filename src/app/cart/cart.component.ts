import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  items;
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  increment(productId) {
    this.cartService.increment(productId);
    this.items = this.cartService.getItems();
  }

  decrement(productId) {
    this.cartService.decrement(productId)
    this.items = this.cartService.getItems();
  }

  getAmount() {
    return this.amount;
  }
}
