import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { AngularFire } from 'angularfire2';

import { File } from '../model/file';

@Component({
  moduleId: module.id,
  selector: 'app-file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(public af:AngularFire) {}

  model = new File("asdf", this.af.auth.getAuth().uid, "test", 0);
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
