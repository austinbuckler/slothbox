
import { Component, Inject } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {DropBoxComponent} from './cloud/dropbox-auth.component';

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
    path: '/auth/dropbox',
    name: 'DropBox',
    component: DropBoxComponent
}
])

export class SlothboxAppComponent {
  public title = 'nimbus';
  constructor(
    public af:AngularFire,
    @Inject(FirebaseAuth) public auth: FirebaseAuth,
    public router:Router
  ) {}
  welcome = "Welcome to nimbus the all in one cloud storage manager!";

  logout() {
    this.af.auth.logout();
    this.router.navigate(['Login']);
  }

}

