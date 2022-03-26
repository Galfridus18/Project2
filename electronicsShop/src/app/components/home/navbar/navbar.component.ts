import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { CartService } from 'src/app/cartService/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItems: number = 0;
  constructor(private auth: AuthenticationService, private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.totalItems = res.length
      
    })
  }

  isUserLogged():boolean{
    return this.auth.isUserLoggedIn();
  }
  
  loggedOut():void{
    console.log('clicked');
    this.auth.logOut();
  }

}
