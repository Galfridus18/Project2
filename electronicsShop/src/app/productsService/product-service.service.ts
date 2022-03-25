import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  
  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    
    return this.http.get<any>('http://localhost:9000/products')
  }
  getProductCategories():Observable<any>{
    return this.http.get<any>('http://localhost:9000/products/categories')
  }
  getProductsByCategories( category:string ):Observable<any>{
    return this.http.get<any>('http://localhost:9000/products/categories/'+category)
  }
}
