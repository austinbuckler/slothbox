import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Http, HTTP_BINDINGS, Headers } from '@angular/http';
import { environment } from '../environment';

@Component({
  moduleId: module.id,
  selector: 'dropbox-connect',
  templateUrl: 'dropbox-connect.html',
  providers: [HTTP_BINDINGS]
})
export class DropboxConnectComponent implements OnInit {
  // getResponse: any;
  redirectURL = environment.production ? "https://westcoastbestcoast.2016.angularattack.io/auth/dropbox/" : "http://localhost:4200/auth/dropbox/";
  constructor(http:Http) {
    // var creds = "appkey= jbqssj52us3hsh2";
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // http.post('https://api.dropboxapi.com/2/files/list_folder',creds,{
    //   headers: headers
    // }).subscribe(res => {
    //   this.getResponse = res.json();
    // });
  }

  ngOnInit() {}

  doAuth() {
    var win = window.open('https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri=' + this.redirectURL, "Authorize Dropbox", 'width=800, height=600');
    var self = this;
    var pollTimer = window.setInterval(function() {
      try {
        if (win.document.URL.indexOf(self.redirectURL) != -1) {
          window.clearInterval(pollTimer);
          var url = win.document.URL;
          var acToken = self.gup(url, 'access_token');
          var tokenType = self.gup(url, 'token_type');
          var uid = self.gup(url, 'uid');
          win.close();

          console.log({ acToken, tokenType, uid });
        }
      } catch(e) {
      }
    }, 100);
  //  window.location.replace("https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri=" + this.redirectURL);
  //  console.log(this.getResponse);
  }

  //credits: http://www.netlobo.com/url_query_string_javascript.html
  private gup(url, name) {
    name = name.replace(/[[]/,"\[").replace(/[]]/,"\]");
    var regexS = "[\#&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    if( results == null ) {
      return "";
    } else {
      return results[1];
    }
  }
}