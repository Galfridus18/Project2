import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';

import { FooterComponent } from './components/home/footer/footer.component';
import { ContainerComponent } from './components/home/container/container.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login-page/login/login.component';
import { MoreProductsComponent } from './components/home/more-products/more-products.component';
import { CategoriesComponent } from './components/home/categories/categories.component';

import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CheckoutFormComponent } from './components/cart/checkout-form/checkout-form.component';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { FilterPipe } from './shared/filter.pipe';
import { RegisterComponent } from './components/register/register/register.component';
import { CheckoutConfirmComponent } from './components/cart/checkout-confirm/checkout-confirm.component';
import { OrdersComponent } from './components/orders/orders/orders.component';
import { OrderByPipe } from './shared/order-by.pipe';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,    
    FooterComponent,
    ContainerComponent,
    ProductsComponent,
    LoginComponent,
    MoreProductsComponent,
    CategoriesComponent,
    
    ProductsByCategoryComponent,
    CartComponent,
    CheckoutFormComponent,
    CartPageComponent,
    ProfileComponent,
    FilterPipe,
    RegisterComponent,
    CheckoutConfirmComponent,
    OrdersComponent,
    OrderByPipe,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,   
    
    
  ],
  exports: [OrderByPipe],
  providers: [OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
