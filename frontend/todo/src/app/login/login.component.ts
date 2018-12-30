import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'ashok';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // Dependency Injection

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticatedService: BasicAuthenticationService
    ) { }

  ngOnInit() {

  }

  handleLogin() {
    // console.log(this.username);
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // redirect to the welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

  handleBasicAuthLogin() {
    // console.log(this.username);
    this.basicAuthenticatedService.executeBasicAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
        }
      );


  }

  handleJWTBasicAuthLogin() {
    // console.log(this.username);
    this.basicAuthenticatedService.executeJWTBasicAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
        }
      );


  }

}
