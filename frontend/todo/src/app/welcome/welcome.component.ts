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

  constructor(
    private router: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {
    // console.log(this.router.snapshot.params['name']);
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(

    );
  }

}
