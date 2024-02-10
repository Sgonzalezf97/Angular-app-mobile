import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent implements OnInit {
  public product?:Product;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(  ({id}) => this.productsService.getProductById(id)),
      ).subscribe(product => {
        if (!product) return this.router.navigate(['/products/list']);
        this.product=product;
        console.log({product})
        return;
      })
  }

  goBack():void{
    this.router.navigateByUrl("products/list")
  }
}
