import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Goods } from '../models/goods';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.less']
})
export class ProductModalComponent implements OnInit {

  product: Goods;
  prodCount = 1;
  productId: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params) => {
      this.productId = +params.id;
      this.product = this.productService.getProduct(this.productId);
    });
  }

  closeMod(event) {
    if (event.target.id === 'modalDivId') {
      this.router.navigate([
        'products'
      ]);
    }
  }

  addProdToBasket() {
    if (this.prodCount <= this.product.Count) {
      this.productService.addProductToBasket(this.productId, this.prodCount);

      this.router.navigate([
        'products'
      ]);
    }
  }
}
