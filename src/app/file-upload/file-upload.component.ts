import { Component, NgZone } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { UPLOAD_DIRECTIVES } from '../file-uploader/file-uploader.component';

@Component({
  moduleId: module.id,
  selector: 'app-file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.css'],
  directives: [UPLOAD_DIRECTIVES]
})
export class FileUploadComponent {
  zone: NgZone;
  options: Object = {
    url: 'http://ng2-uploader.com:10050/upload' // TODO!
  };
  uploadProgress: number = 0;
  fileUploadResponse: any[] = [];

  constructor(public af:AngularFire) {
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  handleDropUpload(data):void {
    let index = this.fileUploadResponse.findIndex(x => x.id === data.id);
    if (index === -1) {
      this.fileUploadResponse.push(data);
    }
    else {
      this.zone.run(() => {
        this.fileUploadResponse[index] = data;
      });
    }

    let total = 0, uploaded = 0;
    this.fileUploadResponse.forEach(resp => {
      total += resp.progress.total;
      uploaded += resp.progress.loaded;
    });

    this.uploadProgress = Math.floor(uploaded / (total / 100));
  }

}
