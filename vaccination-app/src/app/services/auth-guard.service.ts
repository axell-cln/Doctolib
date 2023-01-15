import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    /* const user = this.authService.getStoredUserInformation(); */

   /*  if (user) {
      this.router.navigate(['centers']);
      return false;
    } */
    return true;
  }
}
