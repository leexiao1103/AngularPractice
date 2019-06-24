import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus: boolean;
  loading = false;
  role: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginStatus = this.getLoginStatus();
    this.role = this.getRole();
  }

  getLoginStatus(): boolean {
    return this.authService.isLogin;
  }

  getRole():string{
    return this.authService.role;
  }

  login(role: string) {
    this.loading = true;
    this.authService.login(role).subscribe(() => {
      if (this.authService.isLogin) {

        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';

        //原本url參數帶著(應該)
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigateByUrl(redirect, navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.loginStatus = this.authService.isLogin;
  }

}
