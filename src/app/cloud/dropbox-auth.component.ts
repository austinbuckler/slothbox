import { Component } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'dropbox-auth',
  templateUrl: 'dropbox-auth.html'
})
export class DropboxAuthComponent {

  public dropboxToken: string;
  public dropboxTokenType: string;
  public dropboxUID: string;

  constructor(
    private router: Router,
    routeParams: RouteParams
  ) {
    this.dropboxToken = routeParams.get('access_token');
    this.dropboxTokenType = routeParams.get('token_type');
    this.dropboxUID = routeParams.get('uid');
    console.log(this.dropboxToken + ' uid:' + this.dropboxUID);
  }

}
