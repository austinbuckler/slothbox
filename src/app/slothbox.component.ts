import { Component } from '@angular/core';
<<<<<<< HEAD
import { RegisterFormComponent } from './register/register-form.component';
import { AngularFire } from 'angularfire2';
=======
import { RegisterFormComponent } from './register/register-form.component'
import { LoginComponentComponent } from './login-component/login-component.component'

>>>>>>> 8a2f42c05ade0dbbd86c4b6f8b7a68d1ac4fa82f
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
<<<<<<< HEAD

  constructor(af:AngularFire) {}
=======
  login = false;
  welcome = "Welcome to Sloth Box the all in one cloud storage manager!";
>>>>>>> 8a2f42c05ade0dbbd86c4b6f8b7a68d1ac4fa82f
}

