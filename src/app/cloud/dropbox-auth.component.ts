import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Http, HTTP_BINDINGS, Headers } from '@angular/http';
import { environment } from '../environment';

@Component({
  moduleId: module.id,
  selector: 'dropbox-auth',
  templateUrl: 'dropbox-auth.component.html',
  providers: [HTTP_BINDINGS]
})
export class DropBoxComponent implements OnInit {
  getResponse: any;
  redirectURL = environment.production ? "https://westcoastbestcoast.2016.angularattack.io/" : "http://localhost:4200/";
  constructor(http:Http) {

  var creds = "appkey= jbqssj52us3hsh2";
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  http.post('https://api.dropboxapi.com/2/files/list_folder',creds,{
   headers: headers
  }).subscribe(res => {
            this.getResponse = res.json();
          });
   }

  ngOnInit() {}
  doAuth() {
   window.location.replace("https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri=" + this.redirectURL);
   console.log(this.getResponse);
  }
}
