import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'slothbox-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor(private router: Router,
  public af:AngularFire) {}

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['Login']);
  }

}
