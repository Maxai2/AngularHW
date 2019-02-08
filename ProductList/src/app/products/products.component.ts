import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Goods } from '../models/goods';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  goods: Goods[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.goods = this.productService.getProducts().sort((a, b) => {
      if (a.Name >= b.Name) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
