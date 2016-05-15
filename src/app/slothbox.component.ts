import { Component, Inject } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DropboxConnectComponent } from './cloud/dropbox-connect.component';
import { DropboxAuthComponent } from './cloud/dropbox-auth.component';

@Component({
  moduleId: module.id,
  selector: 'slothbox-app',
  templateUrl: 'slothbox.component.html',
  styleUrls: ['slothbox.component.css'],
  directives: [ROUTER_DIRECTIVES],
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
    path: '/auth/dropbox/:access_token&:token_type&:uid',
    name: 'DropboxAuth',
    component: DropboxAuthComponent
  }
])

export class SlothboxAppComponent {
  public title = 'nimbus';
  public welcome = "Welcome to nimbus the all in one cloud storage manager!";

  constructor(
    public af:AngularFire,
    @Inject(FirebaseAuth) public auth: FirebaseAuth,
    public router:Router
  ) {}

  logout() {
    this.af.auth.logout();
    this.router.navigate(['Login']);
  }

}

