import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    if(this.items.length > 0){
          if (this.items.some(item => item.product.id == product.id )) {
            for(var i = 0; i < this.items.length; i++){
              if(this.items[i].product.id == product.id){
                this.items[i].amount += 1;
              }
            }
          } else {
            this.items.push({ amount: 1, product});
          }

    } else {
      this.items.push({ amount: 1, product});
    }
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  getAmount() {
    return this.items.length;
  }
}
