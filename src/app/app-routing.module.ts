import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/createProduct/product.component';
import { ProductsComponent } from './components/pages/listProduct/product.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'products/new', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
