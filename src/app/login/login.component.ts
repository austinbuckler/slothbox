import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import { User }    from '../db_table_models/user';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {



  }

  model = new User(1, 'example@example.com', 'test');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
