import { Component } from '@angular/core';
import { RegisterFormComponent } from './register/register-form.component'
@Component({
  moduleId: module.id,
  selector: 'slothbox-app',
  templateUrl: 'slothbox.component.html',
  styleUrls: ['slothbox.component.css'],
  directives: [RegisterFormComponent]
})
export class SlothboxAppComponent {
  title = 'cloud works!';
  registration = false;
}

