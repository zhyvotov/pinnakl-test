import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    MultiSelectComponent
  ]
})
export class MultiSelectModule { }
