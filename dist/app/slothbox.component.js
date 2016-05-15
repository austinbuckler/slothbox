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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var angularfire2_1 = require('angularfire2');
var login_component_1 = require('./login/login.component');
var dropbox_connect_component_1 = require('./cloud/dropbox-connect.component');
var dropbox_auth_component_1 = require('./cloud/dropbox-auth.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var actionbar_component_1 = require('./actionbar/actionbar.component');
var filebrowser_component_1 = require('./filebrowser/filebrowser.component');
var user_1 = require('./shared/user');
var SlothboxAppComponent = (function () {
    function SlothboxAppComponent(af, auth, router) {
        this.af = af;
        this.auth = auth;
        this.router = router;
        this.title = 'nimbus';
        this.welcome = "Welcome to nimbus the all in one cloud storage manager!";
        if (af.auth.getAuth() != null) {
            var googleAuth = af.auth.getAuth().google;
            user_1.user.googleToken = googleAuth.accessToken;
            user_1.user.googleAvatar = googleAuth.profileImageURL;
        }
        else {
            user_1.user.googleAvatar = "https://placehold.it/32/32";
            user_1.user.googleToken = "";
        }
    }
    SlothboxAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slothbox-app',
            templateUrl: 'slothbox.component.html',
            styleUrls: ['slothbox.component.css'],
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                actionbar_component_1.ActionbarComponent,
                sidebar_component_1.SidebarComponent,
                filebrowser_component_1.FilebrowserComponent
            ],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/login',
                name: 'Login',
                component: login_component_1.LoginComponent,
                useAsDefault: true
            },
            {
                path: '/connect/dropbox',
                name: 'DropboxConnect',
                component: dropbox_connect_component_1.DropboxConnectComponent
            },
            {
                path: '/auth/dropbox/',
                name: 'DropboxAuth',
                component: dropbox_auth_component_1.DropboxAuthComponent
            },
            {
                path: '/files',
                name: 'Files',
                component: filebrowser_component_1.FilebrowserComponent
            }
        ]),
        __param(1, core_1.Inject(angularfire2_1.FirebaseAuth)), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, angularfire2_1.FirebaseAuth, router_deprecated_1.Router])
    ], SlothboxAppComponent);
    return SlothboxAppComponent;
}());
exports.SlothboxAppComponent = SlothboxAppComponent;
//# sourceMappingURL=slothbox.component.js.map