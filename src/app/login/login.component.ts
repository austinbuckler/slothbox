import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    public af: AngularFire,
    public user: UserService
  ) {
    if (af.auth.getAuth() != null) {
      router.navigate(['Files']);
    }
    af.auth.subscribe((auth) => {
      if (auth && auth.google != null) {
        user.googleToken = auth.google.accessToken;
        user.googleAvatar = auth.google.profileImageURL;
        router.navigate(['Files']);
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      scope: ["https://www.googleapis.com/auth/drive"]
    });
    if (this.af.auth.getAuth()) {
      let auth = this.af.auth.getAuth();
      this.user.googleToken = auth.google.accessToken;
      this.user.googleAvatar = auth.google.profileImageURL;
    }
  }

  ngOnInit() {

  }

}
