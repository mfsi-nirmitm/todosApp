import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(username, password) {
    // console.log('before ', this.isUserLoggedIn());
    if (username === 'ashok' && password === 'ashok1') {
      sessionStorage.setItem('authenticaterUser', username);
      // console.log('after ', this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  executeBasicAuthenticationService(username, password) {

    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password );

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      {headers}
    ).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser', username);
          return data;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}

export class AuthenticationBean {

  constructor (public message: string) {

  }
}
