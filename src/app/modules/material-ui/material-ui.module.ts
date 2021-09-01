import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_COMPONENTS = [
  MatIconModule,
  MatToolbarModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [ CommonModule, ...MATERIAL_COMPONENTS ],
  exports: [ ...MATERIAL_COMPONENTS ]
})
export class MaterialUiModule { }
