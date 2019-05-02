import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.css']
})
export class BaseAppComponent implements OnInit {
  isLoginOrRegister = false;

  breadcrumbs: string[] = [];

  constructor(public router: Router, public oauthService: AuthenticationService) {}

  ngOnInit() {
    this.oauthService.getUserInfo();
    this.router.events.subscribe((evt: any) => {
      if (evt.url) {
        this.breadcrumbs = evt.url.split(/\//);
      }
      this.breadcrumbs[0] = 'Home';

      // this.isLoginOrRegister = ["/signUp", "/signIn"].indexOf(evt.url) >= 0;
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
