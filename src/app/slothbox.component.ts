<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AngularFire } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import {DropBoxComponent} from './cloud/dropbox-auth.component';
=======
import { Component, Inject } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
>>>>>>> 4832eccd2c090f69a69063a3b03291a58db417fe

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
<<<<<<< HEAD
    component: LoginComponent
  },
  {
    path: '/auth/dropbox',
    name: 'DropBox',
    component: DropBoxComponent
=======
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/upload',
    name: 'FileUpload',
    component: FileUploadComponent
>>>>>>> 4832eccd2c090f69a69063a3b03291a58db417fe
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

