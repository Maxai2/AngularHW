import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'products', component: ProductsComponent, children: [
    { path: ':id', component: ProductModalComponent }
  ]},
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
