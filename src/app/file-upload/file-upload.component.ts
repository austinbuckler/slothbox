import { Component, NgZone, ElementRef, Renderer } from '@angular/core';
import { NgClass } from '@angular/common';
import { AngularFire } from 'angularfire2';
import { UPLOAD_DIRECTIVES } from '../file-uploader/file-uploader.component';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'file-upload-box',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.css'],
  directives: [UPLOAD_DIRECTIVES, NgClass]
})
export class FileUploadComponent {
  zone: NgZone;
  options: Object;
  uploadProgress: number = 0;
  fileUploadResponse: any[] = [];
  classMap: {};
  dragOverListener: any;
  dragLeaveListener: any;

  constructor(
    public el: ElementRef,
    public renderer: Renderer,
    public af: AngularFire,
    public user: UserService
  ) {
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.options = {
      authToken: user.googleToken,
      withCredentials: true,
      url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media'
    };
    this.classMap = {
      'droparea': true,
      'droparea-hidden': true
    };
    var self = this;
    this.dragOverListener = renderer.listenGlobal('document', 'dragover', (e) => {
      var dt = e.originalEvent.dataTransfer;
      if(dt.types != null && (dt.types.indexOf ? dt.types.indexOf('Files') != -1
        : dt.types.contains('application/x-moz-file'))) {
          self.classMap['droparea-hidden'] = false;
          window.clearTimeout(self.dragTimer);
      }
    });
    this.dragLeaveListener = renderer.listenGlobal('document', 'dragleave', (e) => {
      self.dragTimer = window.setTimeout(function() {
          self.classMap['droparea-hidden'] = true;
        }, 25);
    });
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

  dragTimer: any;

}
