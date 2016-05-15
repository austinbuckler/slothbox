import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {

  googleToken = "";
  googleAvatar = "https://placehold.it/32/32";
  public googleDrive: Object;
  public dropbox: Object;
  private dropboxObserver: FirebaseObjectObservable<any>;
  private dropboxInfo: any;

  constructor(
    public af: AngularFire
  ) {
    if (af.auth.getAuth()) {
      this.dropboxObserver = af.database.object('/' + af.auth.getAuth().uid, { preserveSnapshot: true });
    }
  }

  logout() {
    this.googleToken = "";
    this.googleAvatar = "https://placehold.it/32/32";
  }

  getDropbox(cb) {
    return this.dropboxObserver.subscribe(snapshot => {
      cb(snapshot.val());
    });
  }

  setDropbox(token, uid) {
    this.dropboxObserver.set({ uid: this.af.auth.getAuth().uid, dropboxToken: token, dropboxUID: uid });
  }

}
