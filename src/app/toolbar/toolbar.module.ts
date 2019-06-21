import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ShareMaterialModule } from '../module/share-material.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShareMaterialModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class ToolbarModule { }
