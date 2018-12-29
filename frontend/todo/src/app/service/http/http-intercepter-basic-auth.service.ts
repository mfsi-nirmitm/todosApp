import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const username = 'ashok';
    const password = 'ashok1';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    });

    return next.handle(request);
  }

}
