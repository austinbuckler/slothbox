import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {

  googleToken = "";
  googleAvatar = "https://placehold.it/32/32";
  googleDrive = {};
  dropbox = {};
  private dropboxObserver: FirebaseObjectObservable<any>;
  dropboxInfo = {};

  constructor(
    public af: AngularFire
  ) {
    this.dropboxObserver = af.database.object('/' + af.auth.getAuth().uid, { preserveSnapshot: true });
    this.dropboxObserver.subscribe(snapshot => {
      this.dropboxInfo = snapshot.val();;
    });
  }

  logout() {
    this.googleToken = "";
    this.googleAvatar = "https://placehold.it/32/32";
    this.googleDrive = {};
    this.dropbox = {};
  }

  setDropbox(token, uid) {
    this.dropboxObserver.set({ uid: this.af.auth.getAuth().uid, dropboxToken: token, dropboxUID: uid });
  }

}
