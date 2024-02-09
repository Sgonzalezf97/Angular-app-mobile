import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './pages/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListComponent } from './pages/list/list.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ProductImagePipe } from './pipes/product-image.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    LayoutPageComponent,
    ListComponent,
    CartComponent,
    SearchPageComponent,
    CardComponent,
    ProductImagePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
