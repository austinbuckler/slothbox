import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Http, HTTP_BINDINGS, Headers } from '@angular/http';
import { environment } from '../environment';
import { AngularFire } from 'angularfire2';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'slothbox-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_BINDINGS]
})

export class SidebarComponent implements OnInit {

  redirectURL = environment.production ? "https://westcoastbestcoast.2016.angularattack.io/files/" : "http://localhost:4200/files/";

  constructor(
    public router: Router,
    public af: AngularFire,
    public user: UserService,
    public http: Http
  ) {}

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.user.logout();
    this.router.navigate(['Login']);
  }

  accessDropbox() {
    if (this.user.dropboxInfo == {}) {
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
            self.user.setDropbox(acToken, uid);
          }
        } catch(e) {
        }
      }, 100);
    }
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
