import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent implements OnInit{

  public productos: Product[] = [];
  public searchInput= new FormControl('');
  public products: Product[]=[];
  public selectedHero?: Product;

  constructor(private productsService: ProductsService){

  }
  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(productos => this.productos = productos);
  }

  searchProduct(){
    const value: string = this.searchInput.value || '';
    this.productsService.getSuggestions(value)
    .subscribe(products => this.products = products);
  }

  onSelectedOption( event: MatAutocompleteSelectedEvent):void{
    if (!event.option.value) {
      this.selectedHero=undefined;
      return;
    }

    const product: Product = event.option.value;
    this.searchInput.setValue( product.nombre);
    this.selectedHero=product;
  }
}
