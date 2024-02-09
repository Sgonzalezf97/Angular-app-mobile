import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListComponent } from './pages/list/list.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'cart',component:CartComponent},
      {path:'search',component:SearchPageComponent},
      {path:'edit/:id',component:NewPageComponent},
      {path:'list',component:ListComponent},
      {path:':id',component:ProductComponent},
      {path:'**',redirectTo:'list'},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

