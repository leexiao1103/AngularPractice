import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatInputModule, MatListModule } from '@angular/material';

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
    MatListModule
  ]
})
export class ShareMaterialModule { }
