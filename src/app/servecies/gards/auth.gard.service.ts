import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {

  constructor(private as: AuthService , private router :Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{

 return new Promise(resolve => {
   this.as.user.subscribe(user => {
     if(user)resolve(true);
     else {
       this.router.navigate(['/login'])
       resolve(false)
      }
   })
 })
  }
}