import { Component } from '@angular/core';
import { RegisterFormComponent } from './register/register-form.component'
import { LoginComponentComponent } from './login-component/login-component.component'

@Component({
  moduleId: module.id,
  selector: 'slothbox-app',
  templateUrl: 'slothbox.component.html',
  styleUrls: ['slothbox.component.css'],
  directives: [RegisterFormComponent,LoginComponentComponent]
})
export class SlothboxAppComponent {
  title = 'Sloth Box';
  registration = false;
  login = false;
  welcome = "Welcome to Sloth Box the all in one cloud storage manager!";
}

