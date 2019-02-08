import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { EditNewProductComponent } from './edit-new-product/edit-new-product.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
    { path: 'welcome-admin', component: WelcomeAdminComponent },
    { path: 'products', component: AdminProductsComponent, children: [
        { path: 'edit/:id', component: EditNewProductComponent },
        { path: 'new', component: EditNewProductComponent }
     ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
