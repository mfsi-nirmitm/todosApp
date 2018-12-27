import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  message = 'Some Welcome Message';
  welcomeMessageFromService: string;

  constructor(
    private router: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {
    // console.log(this.router.snapshot.params['name']);
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    // console.log(response);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.message;
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

}
