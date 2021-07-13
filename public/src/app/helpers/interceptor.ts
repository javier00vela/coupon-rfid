import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) : any{
    const idToken = localStorage.getItem("token");
    console.log(idToken);
    
     if (idToken) {
        const cloned = req.clone({
            headers: req.headers.set("authorization",idToken)
        }); 
        return next.handle(cloned);
      }
     else {
          return next.handle(req);
      }
  }

}