import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SlothboxAppComponent, environment, UserService } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(SlothboxAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://wcbc2016-aa.firebaseio.com/'),
  UserService
]);
