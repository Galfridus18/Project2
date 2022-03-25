import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProductServiceService } from 'src/app/productsService/product-service.service';
import {Router} from '@angular/router'
import { CartService } from 'src/app/cartService/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[]=[];

  constructor(private cart:CartService, private product:ProductServiceService, private auth:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe(data=>{
      this.products = data
      this.products.forEach((a) => {
        Object.assign(a,{quantity:1,total:a.price})
      });      
    })
  }
  isUserLogged():boolean{
    return this.auth.isUserLoggedIn();
  }
  isNotLoggedIn(){
    this.router.navigate(['login'])
  }
  addToCart(product:any){
    this.cart.addToCart(product)
  }
}
