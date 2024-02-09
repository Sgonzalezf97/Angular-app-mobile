import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    ProductComponent,
    LayoutPageComponent,
    CartComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
