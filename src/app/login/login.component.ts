import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import { User }    from '../db_table_models/user';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  login() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup,
    });
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });    
  }

  ngOnInit() {



  }

}
