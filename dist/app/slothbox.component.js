"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var angularfire2_1 = require('angularfire2');
var login_component_1 = require('./login/login.component');
var dropbox_auth_component_1 = require('./cloud/dropbox-auth.component');
var SlothboxAppComponent = (function () {
    function SlothboxAppComponent(af) {
        this.title = 'nimbus';
        this.login = false;
        this.welcome = "Welcome to nimbus the all in one cloud storage manager!";
    }
    SlothboxAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slothbox-app',
            templateUrl: 'slothbox.component.html',
            styleUrls: ['slothbox.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/login',
                name: 'Login',
                component: login_component_1.LoginComponent
            },
            {
                path: '/auth/dropbox',
                name: 'DropBox',
                component: dropbox_auth_component_1.DropBoxComponent
            }
        ]), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], SlothboxAppComponent);
    return SlothboxAppComponent;
}());
exports.SlothboxAppComponent = SlothboxAppComponent;
//# sourceMappingURL=slothbox.component.js.map