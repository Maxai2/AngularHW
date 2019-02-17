import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
imports: [
  BrowserAnimationsModule,
  MatButtonModule,
  MatToolbarModule
],
exports: [
  BrowserAnimationsModule,
  MatButtonModule,
  MatToolbarModule,
]
})
export class MaterialAppModule { }
