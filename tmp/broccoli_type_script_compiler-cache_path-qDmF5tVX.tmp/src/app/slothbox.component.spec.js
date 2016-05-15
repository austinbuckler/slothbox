"use strict";
var testing_1 = require('@angular/core/testing');
var slothbox_component_1 = require('../app/slothbox.component');
testing_1.beforeEachProviders(function () { return [slothbox_component_1.SlothboxAppComponent]; });
testing_1.describe('App: Slothbox', function () {
    testing_1.it('should create the app', testing_1.inject([slothbox_component_1.SlothboxAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'slothbox works!\'', testing_1.inject([slothbox_component_1.SlothboxAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('slothbox works!');
    }));
});
//# sourceMappingURL=slothbox.component.spec.js.map