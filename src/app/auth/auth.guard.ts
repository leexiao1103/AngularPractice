import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HeroDetailComponent } from '../hero/hero-detail/hero-detail.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<HeroDetailComponent> {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('canActivate');
    return this.checkLogin(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('canActivateChild');
    return this.checkRole(state.url);
  }

  canDeactivate(
    component: HeroDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): boolean {
    console.log(component.oriName)
    if (component.hero.name === component.oriName) { return true; }

    return confirm('Confirm go?');
  }

  checkLogin(url: string) {
    if (this.authService.isLogin) { return true; }

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);

    return false;
  }

  checkRole(url: string) {
    if (this.authService.role.toLowerCase() === 'super') { return true; }

    this.authService.redirectUrl = url;

    this.router.navigate(['/admin']);

    return false;
  }

}
