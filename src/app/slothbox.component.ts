import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AngularFire } from 'angularfire2';
import { LoginComponent } from './login/login.component'

@Component({
  moduleId: module.id,
  selector: 'slothbox-app',
  templateUrl: 'slothbox.component.html',
  styleUrls: ['slothbox.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
])

export class SlothboxAppComponent {
  public title = 'nimbus';
  constructor(af:AngularFire) {}
  login = false;
  welcome = "Welcome to nimbus the all in one cloud storage manager!";
}

