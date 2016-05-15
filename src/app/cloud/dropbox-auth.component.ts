import { Component, OnInit, Inject } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Http, HTTP_BINDINGS, Headers, RequestOptions, Response } from '@angular/http';

import { environment } from '../environment';

@Component({
  moduleId: module.id,
  selector: 'dropbox-auth',
  templateUrl: 'dropbox-auth.html',
  providers: [HTTP_BINDINGS]
})
export class DropboxAuthComponent implements OnInit {

  public dropboxToken: string;
  public dropboxTokenType: string;
  public dropboxUID: string;

  constructor(
    private router: Router,
    @Inject(RouteParams) routeParams: RouteParams,
    private http: Http
  ) {
    var creds = {
      accessToken: routeParams.get('access_token'),
      tokenType: routeParams.get('token_type'),
      uid: routeParams.get('uid')
    };
    console.log(creds);
    // var redirectURL = environment.production ? "https://westcoastbestcoast.2016.angularattack.io/auth/dropbox/" : "http://localhost:4200/auth/dropbox/";
    // var code = routeParams.get('code');
    // var body = JSON.stringify({
    //   code,
    //   grant_type: 'authorization_code',
    //   client_id: 'jbqssj52us3hsh2',
    //   client_secret: 'o9tise71w3fv5ce',
    //   redirect_uri: redirectURL
    // });
    // var headers = new Headers({
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Accept': 'application/json'
    // });
    // var options = new RequestOptions({
    //   headers: headers
    // });
    // http.post('https://api.dropboxapi.com/1/oauth2/token', body, options)
    //     .subscribe((res) => console.log(res));
  }

  // private extractData(res: Response) {
  //   if (res.status < 200 || res.status >= 300) {
  //     throw new Error('Response status: ' + res.status);
  //   }
  //   let body = res.json();
  //   return body.data || { };
  // }

  ngOnInit() {
    // console.log(this.routeParams);
    // this.dropboxToken = this.routeParams.get('access_token');
    // this.dropboxTokenType = this.routeParams.get('token_type');
    // this.dropboxUID = this.routeParams.get('uid');
    // console.log(this.dropboxToken + ' uid:' + this.dropboxUID);
  }

}
