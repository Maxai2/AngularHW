import { Component, OnInit } from '@angular/core';
import { Goods } from 'src/app/models/goods';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.less']
})
export class AdminProductsComponent implements OnInit {

  goods: Goods[];

  constructor(
    private productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.goods = this.productService.getProducts().sort((a, b) => {
      if (a.Name >= b.Name) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  NewProd() {
    this.router.navigate([
      'admin/products/new'
    ]);
  }

  RemoveAdminProd(prodId: number) {
    this.productService.removeProduct(prodId);
  }
}
