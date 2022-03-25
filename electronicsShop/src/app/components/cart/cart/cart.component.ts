import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public totalItems: number = 0;
  public product : any = [];
  public grandTotal : number = 0;

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItems = res.length
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
  this.cartService.removeAllCart();
}
}
