import { BasketProduct } from './../models/basket-product';
import { Injectable, OnInit } from '@angular/core';
import { Goods } from '../models/goods';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {

  private category: string[] = [
    '', 'мучные изделия', 'напитки', 'консервы'
  ];

  private nowDate = new Date();
  private products: Goods[] = [
          new Goods(1, 'Хлеб', 0.50, this.category[1], true, 10, new Date(this.nowDate.setDate(this.nowDate.getDate() + 1))),
      new Goods(2, 'Молоко', 1, this.category[2], true, 5, new Date(this.nowDate.setDate(this.nowDate.getDate() + 2))),
      new Goods(3, 'Апельсиновый сок', 2, this.category[2], true, 4, new Date(this.nowDate.setDate(this.nowDate.getDate() + 4))),
      new Goods(4, 'Паштет', 2.50, this.category[3], true, 6, new Date(this.nowDate.setDate(this.nowDate.getDate() + 20))),
      new Goods(5, 'Килька в томатном соусе', 3.50, this.category[3], true, 6, new Date(this.nowDate.setDate(this.nowDate.getDate() + 25)))
  ];

  private basket: BasketProduct[] = [];

  constructor() { }

  ngOnInit() {}

  getProducts() {
    return this.products;
  }

  getProduct(prodId: number): Goods {
    return this.products.find((p) => p.id === prodId );
  }

  addProduct(prod: Goods) {
    prod.id = this.products.length + 1;
    this.products.push(prod);
  }

  editProduct(prodId: number, prod: Goods) {
    const editableProd = this.products.find(p => p.id === prodId);

    editableProd.Category = prod.Category;
    editableProd.Count = prod.Count;
    editableProd.Name = prod.Name;
    editableProd.Price = prod.Price;
    editableProd.canBuy = prod.canBuy;

    const date = new Date(prod.expireDate);
    editableProd.expireDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  }

  removeProduct(prodId: number) {
    this.products.splice(this.products.findIndex(prod => prod.id === prodId), 1);
  }

  // --------------------------------------------------------

  getBasket() {
    return this.basket;
  }

  addProductToBasket(prodId: number, prodCount: number) {
    this.products.find(p => p.id === prodId).Count--;

    const prod = this.getProduct(prodId);
    const bProd = this.basket.find(b => b.ProductId === prod.id);

    if (bProd === undefined) {
      const basketId = this.basket.length;
      this.basket.push(new BasketProduct(basketId, prod.Name, prod.Price, prodCount, prod.id));
    } else {
      this.basket.find(b => b.id === bProd.id).Count++;
    }
  }

  removeProductFromBasket(basketProdId: number): BasketProduct[] {
    this.products.find(p => p.id === this.basket[basketProdId].ProductId).Count++;
    this.basket.splice(this.basket.findIndex(bp => bp.id === basketProdId), 1);

    return this.basket;
  }

  // ---------------------------------------------------------------

  getCategory() {
    return this.category;
  }
}
