import { Directive, ElementRef, EventEmitter } from '@angular/core';
import { FileUploaderService } from './file-uploader.service';

@Directive({
  selector: '[FileDropUploader]',
  inputs: ['options: FileDropUploader'],
  outputs: ['onUpload']
})
export class FileDropUploader {

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

    this.initEvents();
  }

  initEvents(): void {
    this.el.nativeElement.addEventListener('drop', (e) => {
      e.stopPropagation();
      e.preventDefault();

      let dt = e.dataTransfer;
      let files = dt.files;

      if (files.length) {
        this.uploader.addFilesToQueue(files);
      }
    }, false);

    this.el.nativeElement.addEventListener('dragenter', (e) => {
      e.stopPropagation();
      e.preventDefault();
    }, false);

    this.el.nativeElement.addEventListener('dragover', (e) => {
      e.stopPropagation();
      e.preventDefault();
    }, false);
  }

}
