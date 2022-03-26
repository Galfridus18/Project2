import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { CartService } from 'src/app/cartService/cart.service';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/orders/order.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  id:number = 0;
  paymentType:string ='';
  address1:string = ''; 
  country:string ='';
  state:string ='';
  zip:string='';
  public order:Order = new Order;
  public user: User = new User;
  constructor(private orderService: OrderService, private auth:AuthenticationService, private router:Router,  private cart: CartService) { }

  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('userId'));
   this.auth.getUserById(this.id).subscribe(data=>{
     this.user = data;     
     console.log(this.user);
   })
  }
  placeOrder(){
      let finalAddress:string = `${this.address1},  ${this.state}, ${this.zip}, ${this.country} `;
      this.order.paymentType = this.paymentType;
      this.order.shippingAddress = finalAddress;
      this.order.amount = this.cart.getTotalPrice();
      if(this.order.amount>0){
        this.orderService.addOrder(this.order,this.id).subscribe(data=>{
          console.log(data);
          this.cart.removeAllCart();
          this.router.navigate(['orderSubmitted'])
        })
        

      }
    
    }
    

}
