import { Component, OnInit } from '@angular/core';
import { Goods } from 'src/app/models/goods';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-new-product',
  templateUrl: './edit-new-product.component.html',
  styleUrls: ['./edit-new-product.component.less']
})
export class EditNewProductComponent implements OnInit {

  product: Goods;
  productId: number;
  productForm: FormGroup;
  categoryList: string[];
  isNew = false;

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }
  get category() { return this.productForm.get('category'); }
  get count() { return this.productForm.get('count'); }
  get expireDate() { return this.productForm.get('expireDate'); }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.categoryList = this.productService.getCategory();

    this.route.params.forEach((params) => {
      this.productId = +params.id;

      if (!isNaN(this.productId)) {
        this.product = this.productService.getProduct(this.productId);

        if (this.product === undefined) {
          this.router.navigate([
            'admin/products/new'
          ]);
        }
      } else {
        this.product = new Goods();
        this.isNew = true;
      }

      this.productForm = this.fb.group({
        name: [this.product.Name, Validators.required],
        price: [this.product.Price, [Validators.required, Validators.min(0.1)]],
        category: [this.product.Category, Validators.required],
        canBuy: [this.product.canBuy, Validators.required],
        count: [this.product.Count, [Validators.required, Validators.min(1)]],
        expireDate: [this.product.expireDate.toISOString().substring(0, 10), Validators.required]
      });
    });
  }

  closeMod(event) {
    if (event.target.id === 'modalDivId') {
      this.router.navigate([
        'admin/products'
      ]);
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.product.Name = this.productForm.value.name;
      this.product.Price = this.productForm.value.price;
      this.product.Category = this.productForm.value.category;
      this.product.canBuy = this.productForm.value.canBuy;
      this.product.Count = this.productForm.value.count;

      const d = new Date(this.productForm.value.expireDate);
      this.product.expireDate.setFullYear(d.getFullYear(), d.getMonth(), d.getDate());

      if (this.isNew) {
        this.productService.addProduct(this.product);
      } else {
        this.productService.editProduct(this.productId, this.product);
      }

      this.router.navigate([
        'admin/products'
      ]);
    }
  }
}
