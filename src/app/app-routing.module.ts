import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InjectorTestComponent } from './injector-test/injector-test.component';
import { PageNotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { SuperadminComponent } from './admin/superadmin/superadmin.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: 'superadmin',
        component: SuperadminComponent
      }
    ]
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
