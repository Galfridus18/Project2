import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/cartService/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProductServiceService } from 'src/app/productsService/product-service.service';
import { OrderByPipe } from 'src/app/shared/order-by.pipe';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {
  public products: any[]=[];
  public filterCategory:any;
  public categories:any;  

  public category:any;
  constructor(private cart:CartService,private activatedRoute:ActivatedRoute, private auth: AuthenticationService, private data:ProductServiceService, private router:Router, private sortPipe: OrderByPipe) { 
    
  }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get("category");
    this.data.getProducts().subscribe(dt=>{
      this.products = dt
      this.filterCategory = dt;
      this.products.forEach((a) => {        
        Object.assign(a,{quantity:1,total:a.price})
      });
      this.data.getProductCategories().subscribe(data=>{
        this.categories = data
      })
      
    })
    
    }
    addToCart(product:any){
      this.cart.addToCart(product)
    }
    
    isUserLogged():boolean{
      return this.auth.isUserLoggedIn();
    }
    isNotLoggedIn(){
      this.router.navigate(['login'])
    }
    filter(category:string){
      this.filterCategory = this.products
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })    
  }
  orderByAsc(){
    this.filterCategory = this.sortPipe.transform(this.filterCategory,"asc","price");
  }
  orderByDesc(){
    this.filterCategory = this.sortPipe.transform(this.filterCategory,"desc","price");
  }
}


