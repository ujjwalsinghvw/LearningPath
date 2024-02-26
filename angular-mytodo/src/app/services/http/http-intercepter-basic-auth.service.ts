import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let username = "user"
   let password = "abc123"
   let basicAuthHeader = "Basic "+ window.btoa(username+':'+password);
   req = req.clone({
    setHeaders : {
      Authorization : basicAuthHeader
    }
   })
   return next.handle(req)
  }
  
}
