import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient, private router:Router) { }

  addOrder(order:Order,id:number):Observable<Order>{
    return this.http.post<Order>('http://localhost:9000/orders/'+id,order) 
  }

  getAllOrders(id:number):Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:9000/orders/+'+id)
  }
}
