import { Component }         from '@angular/core';
import { RegisterFormComponent } from './register/register-form.component'
@Component({
  selector: 'my-app',
  template: '<h1>SlothBox</h1>'+


'<p (click)="registration = true" style="cursor:pointer;"> Click Here to register</p>'+

'<div *ngIf="registration" >'+
 '<register-form></register-form>'+
'</div>',
  directives: [RegisterFormComponent]
})
export class AppComponent { 
registration = false;
}