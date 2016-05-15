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

  private dropboxFilesURL: string = "https://api.dropboxapi.com/2/files/list_folder";//'https://content.dropboxapi.com/1/files/auto/';
  private googleDriveFilesURL: string = 'https://www.googleapis.com/drive/v3/files';
  public googleDriveFiles: Object;
  public dropboxFiles: Object;

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
   /* this.googleDriveFiles = http.get(this.googleDriveFilesURL, {
      headers: driveHeaders
    }).subscribe(res => {
     // return res;
    });*/
    console.log(this.googleDriveFiles);
    console.log("dropbox token " + this.user.dropboxToken);
   this.getDropBoxFiles();

  }

getDropBoxFiles()
{
var dropBoxheaders = new Headers();
        dropBoxheaders.append('Authorization', 'Bearer '+this.user.dropboxToken);
        dropBoxheaders.append('Content-Type', 'application/json');
       this.http.post(this.dropboxFilesURL,JSON.stringify({"path":""}),{headers: dropBoxheaders}).subscribe(res => {
            this.dropboxFiles =   res.json().entries;
            console.log(this.dropboxFiles);
        });
        
}
  ngOnInit() {}

}
