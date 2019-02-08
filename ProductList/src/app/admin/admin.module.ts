import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { EditNewProductComponent } from './edit-new-product/edit-new-product.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminProductsComponent, EditNewProductComponent, WelcomeAdminComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
