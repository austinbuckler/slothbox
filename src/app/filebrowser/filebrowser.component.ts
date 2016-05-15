import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AngularFire } from 'angularfire2';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Http, HTTP_PROVIDERS, Headers } from '@angular/http';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'slothbox-filebrowser',
  templateUrl: 'filebrowser.component.html',
  styleUrls: ['filebrowser.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    FileUploadComponent,
    SidebarComponent
  ],
  providers: [
    HTTP_PROVIDERS
  ]
})
export class FilebrowserComponent implements OnInit {

  private dropboxFilesURL: string = 'https://content.dropboxapi.com/1/files/auto/';
  private googleDriveFilesURL: string = 'https://www.googleapis.com/drive/v3/files';

  constructor(
    private router: Router,
    public af: AngularFire,
    public http: Http,
    public user: UserService
  ) {
    if (af.auth.getAuth() == null) {
      router.navigate(['Login']);
    }
    var driveHeaders = new Headers({
      'Authorization': 'Bearer ' + user.googleToken
    });
    var self = this;
    user.googleDrive = http.get(this.googleDriveFilesURL, {
      headers: driveHeaders
    }).map(res => {
      return res.json();
    });
  }

  ngOnInit() {}

}
