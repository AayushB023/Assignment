import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem("user_cred") == "true"){
      return true;
    }else{
      this.myRoute.navigate([""]);
      return false;
    }
  }
}