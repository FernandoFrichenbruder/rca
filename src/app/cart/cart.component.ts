import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  items;
  amount: number = 1;
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  increment() {
    this.amount += 1;
  }

  decrement() {
    (this.amount > 0)? this.amount -= 1: this.amount = 0;
  }

  getAmount() {
    return this.amount;
  }
}
