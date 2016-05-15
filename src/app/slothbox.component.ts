import { Component, Inject } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
<<<<<<< HEAD
import { DropboxConnectComponent } from './cloud/dropbox-connect.component';
import { DropBoxComponent } from './cloud/dropbox-auth.component';
=======
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { FilebrowserComponent } from './filebrowser/filebrowser.component';
import { UserService } from './user.service';
>>>>>>> af417b6d3015a216678d743e7ea0ce4b24e6c1f1

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
<<<<<<< HEAD
    path: '/upload',
    name: 'FileUpload',
    component: FileUploadComponent
  },
  {
    path: '/connect/dropbox',
    name: 'DropboxConnect',
    component: DropboxConnectComponent
  },
  {
    path: '/auth/dropbox',
    name: 'DropBox',
    component: DropBoxComponent
=======
    path: '/files',
    name: 'Files',
    component: FilebrowserComponent
>>>>>>> af417b6d3015a216678d743e7ea0ce4b24e6c1f1
  }
])

export class SlothboxAppComponent {
  public title = 'nimbus';
  public welcome = "Welcome to nimbus the all in one cloud storage manager!";

  constructor(
    public af:AngularFire,
    @Inject(FirebaseAuth) public auth: FirebaseAuth,
    public router: Router,
    public user: UserService
  ) {
    if (af.auth.getAuth() != null) {
      let googleAuth = af.auth.getAuth().google;
      user.googleToken = googleAuth.accessToken;
      user.googleAvatar = googleAuth.profileImageURL;
    }
  }

}

