import { BasketProduct } from './../models/basket-product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {

  pBasketCount = 0;
  basketProducts: BasketProduct[];
  totalPrice = 0;

  constructor(
    private productService: ProductsService) { }

  ngOnInit() {
    this.basketProducts = this.productService.getBasket();

    this.basketProducts.forEach(p => {
      this.totalPrice += p.Count * p.Price;
      this.pBasketCount += p.Count;
    });
  }

  removeProdFromBasket(basketProdId: number) {
    this.basketProducts = this.productService.removeProductFromBasket(basketProdId);

    this.totalPrice = 0;
    this.pBasketCount = 0;

    this.basketProducts.forEach(p => {
      this.totalPrice += p.Count * p.Price;
      this.pBasketCount += p.Count;
    });
  }
}
