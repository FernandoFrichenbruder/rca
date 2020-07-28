import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderBarComponent,
    FooterBarComponent,
    CartComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'login', component: UserComponent },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
