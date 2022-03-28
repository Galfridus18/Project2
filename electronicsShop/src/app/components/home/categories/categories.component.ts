import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/productsService/product-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[]=[];

  constructor(private products:ProductServiceService, private router:Router) { }

  ngOnInit(): void {    
      
  }
  
  
}


