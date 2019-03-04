import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
imports: [
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatRadioModule,
  MatMenuModule,
  MatIconModule
],
exports: [
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatRadioModule,
  MatMenuModule,
  MatIconModule
]
})
export class MaterialAppModule { }
