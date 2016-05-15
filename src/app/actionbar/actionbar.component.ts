import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { FirebaseAuth } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'slothbox-actionbar',
  templateUrl: 'actionbar.component.html',
  styleUrls: ['actionbar.component.css']
})
export class ActionbarComponent implements OnInit {

  constructor(
    public auth: FirebaseAuth,
    public user: UserService
  ) {
  }

  ngOnInit() {
  }

}
