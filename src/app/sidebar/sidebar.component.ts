import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AngularFire } from 'angularfire2';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'slothbox-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent implements OnInit {

  constructor(
    public router: Router,
    public af: AngularFire,
    public user: UserService
  ) {}

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.user.logout();
    this.router.navigate(['Login']);
  }

}
