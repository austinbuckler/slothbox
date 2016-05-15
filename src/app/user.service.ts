import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() {}

  googleToken = "";
  dropboxToken = "";
  googleAvatar = "https://placehold.it/32/32";

  logout() {
    this.googleToken = "";
    this.dropboxToken = "";
    this.googleAvatar = "https://placehold.it/32/32";
  }

}
