import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/orders/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  listOrders: Order[]=[];
  id:number=0;

  constructor(private orders: OrderService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('userId'));
    this.orders.getAllOrders(this.id).subscribe(data=>{
      this.listOrders = data;
      console.log(this.listOrders);
    })
  }
  isUserLogged():boolean{
    return this.auth.isUserLoggedIn();
  }

}
