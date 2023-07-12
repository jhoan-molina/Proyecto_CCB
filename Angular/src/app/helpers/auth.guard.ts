import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PropietarioService } from '../services/propietario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //pasamos como parametro el propietarioServicio de tipo propietarioServicio y router de tipo router
  //donde traeremos los servicios que estan alojados alli
  constructor(private propietarioServicio: PropietarioService, private router: Router){

  }

  //Aqui el guardian trae el token y verifica que coincida y haya uno
  //de lo contrario no pone en rura al Login
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.propietarioServicio.getToken()){
        return true;
      }
      this.router.navigate(['login']);
    return false;
  }
  
}
