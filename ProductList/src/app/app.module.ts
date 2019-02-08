import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { BasketComponent } from './basket/basket.component';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    ProductModalComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
