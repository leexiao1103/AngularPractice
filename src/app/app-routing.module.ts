import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InjectorTestComponent } from './injector-test/injector-test.component';
import { PageNotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: 'injector-test',
    component: InjectorTestComponent
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: '**',
    component: PageNotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
