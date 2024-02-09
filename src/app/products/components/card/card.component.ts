import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'products-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
  @Input()
  public product!: Product;

  ngOnInit(): void{
    if (!this.product) throw Error('product property is requiered')
  }
}
