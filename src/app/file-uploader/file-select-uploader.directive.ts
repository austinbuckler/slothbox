import { Directive, ElementRef, EventEmitter } from '@angular/core';
import { FileUploaderService } from './file-uploader.service';

@Directive({
  selector: '[FileSelectUploader]',
  inputs: ['options: FileSelectUploader'],
  outputs: ['onUpload']
})
export class FileSelectUploader {

  uploader: FileUploaderService;
  options: any;
  onUpload: EventEmitter<any> = new EventEmitter();

  constructor(public el: ElementRef) {
    this.uploader = new FileUploaderService();
    setTimeout(() => {
      this.uploader.setOptions(this.options);
    });

    this.uploader._emitter.subscribe((data) => {
      this.onUpload.emit(data);
    });
  }

  onFiles(): void {
    let files = this.el.nativeElement.files;
    if (files.length) {
      this.uploader.addFilesToQueue(files);
    }
  }

}
