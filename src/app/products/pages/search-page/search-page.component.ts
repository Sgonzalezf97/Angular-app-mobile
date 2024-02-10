import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/product.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {
  public searchInput= new FormControl('');
  public products: Product[]=[];
  public selectedHero?: Product;

  constructor(private productsService: ProductsService){}

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
