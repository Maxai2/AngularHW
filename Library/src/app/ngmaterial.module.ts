import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
imports: [
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule
],
exports: [
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule
]
})
export class MaterialAppModule { }
