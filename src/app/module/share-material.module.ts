import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule, MatInputModule, MatListModule, MatAutocompleteModule, MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ]
})
export class ShareMaterialModule { }
