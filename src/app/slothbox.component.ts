import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { RegisterFormComponent } from './register/register-form.component'
import { LoginComponent } from './login/login.component'

@Component({
  moduleId: module.id,
  selector: 'slothbox-app',
  templateUrl: 'slothbox.component.html',
  styleUrls: ['slothbox.component.css'],
  directives: [RegisterFormComponent,LoginComponent]
})
export class SlothboxAppComponent {
  title = 'nimbus';
  registration = false;
  constructor(af:AngularFire) {}
  login = false;
  welcome = "Welcome to nimbus the all in one cloud storage manager!";
}

