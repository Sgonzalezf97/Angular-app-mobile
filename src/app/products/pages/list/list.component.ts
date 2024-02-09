import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent implements OnInit{

  public productos: Product[] = [];

  constructor(private productsService: ProductsService){

  }
  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(productos => this.productos = productos);
  }
}
