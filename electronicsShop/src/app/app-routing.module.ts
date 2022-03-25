import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';
import { ContainerComponent } from './components/home/container/container.component';
import { LoginComponent } from './components/login-page/login/login.component';

import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile/profile.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'home', component:ContainerComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'profile', component:ProfileComponent},

  {path:'categories', component:ProductsByCategoryComponent},  
  {path:'cart', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
