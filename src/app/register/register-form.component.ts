import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { User }    from '../db_table_models/user';
@Component({
  selector: 'register-form',
  templateUrl: 'app/register/register-form.component.html'
})
export class RegisterFormComponent {
  model = new User(1, 'example@example.com', 'test');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
