import { Injectable } from '@angular/core';
import { Router, 
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate 
        } from '@angular/router';
import { AuthService } from './auth.service';
import { ErrorComponent } from '../components/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private auth:AuthService, private mnserr:ErrorComponent  ) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log('next',next);
    console.log('state',state);
    if (this.auth.isAuthenticated()){
      console.log("Guard ok")
      return true;
    }else{
    
      this.mnserr.mensajeError();
      console.error("Guard block")
      return false;
    }
   
  }
}
