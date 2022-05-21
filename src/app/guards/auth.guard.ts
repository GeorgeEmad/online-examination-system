import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import AuthService from '../services/auth-service.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return this.checkUserLogin(route, url);
  }


  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {

    console.log(this.authService.isLoggedIn())
    if (this.authService.isLoggedIn()) {
      console.log( localStorage.getItem('role'))
      const userRole =  localStorage.getItem('role'); 
      if (route.data['role'] && route.data['role'].includes(userRole) === false) { 

        this.router.navigate(['/login']);
        console.log("FIALED 1 wrong role")
        return false;
      }
      return true;
    }
    console.log("FIALED2 Not logged in")
    this.router.navigate(['/login']);
    return false;
  }
  




}
