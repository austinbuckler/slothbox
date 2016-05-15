import { Component, Inject } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DropboxConnectComponent } from './cloud/dropbox-connect.component';
import { DropboxAuthComponent } from './cloud/dropbox-auth.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { FilebrowserComponent } from './filebrowser/filebrowser.component';
import { user } from './shared/user';

@Component({
  moduleId: module.id,
  selector: 'slothbox-app',
  templateUrl: 'slothbox.component.html',
  styleUrls: ['slothbox.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ActionbarComponent,
    SidebarComponent,
    FilebrowserComponent
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/connect/dropbox',
    name: 'DropboxConnect',
    component: DropboxConnectComponent
  },
  {
    path: '/auth/dropbox/',
    name: 'DropboxAuth',
    component: DropboxAuthComponent
  },
  {
    path: '/files',
    name: 'Files',
    component: FilebrowserComponent
  }
])

export class SlothboxAppComponent {
  public title = 'nimbus';
  public welcome = "Welcome to nimbus the all in one cloud storage manager!";

  constructor(
    public af:AngularFire,
    @Inject(FirebaseAuth) public auth: FirebaseAuth,
    public router:Router
  ) {
    if (af.auth) {
      let auth = af.auth.getAuth().google;
      if (user.googleToken == "" || user.googleAvatar == "") {
        user.googleToken = auth.accessToken;
        user.googleAvatar = auth.profileImageURL;
      }
    }
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['Login']);
  }

}

