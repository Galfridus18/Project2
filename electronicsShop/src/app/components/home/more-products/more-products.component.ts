import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProductServiceService } from 'src/app/productsService/product-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css']
})
export class MoreProductsComponent implements OnInit {
  products: any[]=[];
  constructor(private product:ProductServiceService, private auth:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

}
