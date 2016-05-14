import { Component }         from '@angular/core';
import { RegisterFormComponent } from './register/register-form.component'
@Component({
  selector: 'my-app',
  template: 'Test <register-form></register-form>',
  directives: [RegisterFormComponent]
})
export class AppComponent { }