import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

      constructor(private authservice:AuthService,
              private route:Router) { }

  //redefinition de la methode canactivate
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{
      if(this.authservice.userAuth.isAuth){
        return true;
      }
      else{
        this.route.navigate(['/auth','login']);
      }
      

  }

}
