import { Injectable } from '@angular/core';
import { HardcodedAuthenticationServiceService } from './hardcoded-authentication-service.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public router: Router, public hac: HardcodedAuthenticationServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.hac.isUserLoggedIn())
    return true;
    this.router.navigate(['login'])
    return false;
  }


}
