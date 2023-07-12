import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropietarioService } from '../services/propietario.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //pasamos como parametro el propietarioServicio de tipo PropietarioService
  //donde traeremos los servicios que estan alojados alli
  constructor(private propietarioServicio : PropietarioService) {}

  //Aqui se verifica que siempre en todo momento haya un token
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.propietarioServicio.getToken();
    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
