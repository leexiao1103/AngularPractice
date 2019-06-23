import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ShareMaterialModule } from '../module/share-material.module';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent,
    HeroListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareMaterialModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
