import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sideBarItems=[
    //se definen opciones del menú y las url estan definidas en el router
    {label:'Listado',icon:'label',url:'./list'},
    {label:'Carrito',icon:'add_shopping_cart',url:'./cart'},
    {label:'Añadir',icon:'add',url:'./new-product'},
    {label:'Buscar',icon:'search',url:'./search'},
  ]

}
