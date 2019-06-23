import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'hero-list',
        component: HeroListComponent
      },



    ]
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
