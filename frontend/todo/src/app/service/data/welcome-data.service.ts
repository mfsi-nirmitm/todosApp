import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get(`${API_URL}/hello-world-bean`);
    // console.log('Execute Hello World Bean Service');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {

    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get(`${API_URL}/hello-world/path-variable/${name}`);
    // console.log('Execute Hello World Bean Service');
  }

  // createBasicAuthenticationHttpHeader() {
  //   const username = 'ashok';
  //   const password = 'ashok1';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
