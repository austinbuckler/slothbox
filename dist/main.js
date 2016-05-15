"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var angularfire2_1 = require('angularfire2');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.SlothboxAppComponent, [
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase('https://wcbc2016-aa.firebaseio.com/'),
    _1.UserService
]);
//# sourceMappingURL=main.js.map