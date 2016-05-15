import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { user } from '../shared/user';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public af: AngularFire) {
    af.auth.subscribe((auth) => {
      if (auth) {
        user.googleToken = auth.google.accessToken;
        user.googleAvatar = auth.google.profileImageURL;
      }
    });
    if (af.auth) {
      router.navigate(['Files']);
    }
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      scope: ["https://www.googleapis.com/auth/drive"]
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
