import { Component, OnInit } from '@angular/core';
import { user } from '../shared/user';

@Component({
  moduleId: module.id,
  selector: 'slothbox-actionbar',
  templateUrl: 'actionbar.component.html',
  styleUrls: ['actionbar.component.css']
})
export class ActionbarComponent implements OnInit {

  public userAvatar = user.googleAvatar;

  constructor() {
  }

  ngOnInit() {
  }

}
