import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get('http://localhost:8080/hello-world-bean',
    {headers});
    // console.log('Execute Hello World Bean Service');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {

    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`,
    {headers});
    // console.log('Execute Hello World Bean Service');
  }

  createBasicAuthenticationHttpHeader() {
    const username = 'ashok';
    const password = 'ashok1';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
