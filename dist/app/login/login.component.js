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
var user_service_1 = require('../user.service');
var LoginComponent = (function () {
    function LoginComponent(router, af, user) {
        this.router = router;
        this.af = af;
        this.user = user;
        if (af.auth.getAuth() != null) {
            router.navigate(['Files']);
        }
        af.auth.subscribe(function (auth) {
            if (auth && auth.google != null) {
                user.googleToken = auth.google.accessToken;
                user.googleAvatar = auth.google.profileImageURL;
                router.navigate(['Files']);
            }
        });
    }
    LoginComponent.prototype.login = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup,
            scope: ["https://www.googleapis.com/auth/drive"]
        });
        if (this.af.auth.getAuth()) {
            var auth = this.af.auth.getAuth();
            this.user.googleToken = auth.google.accessToken;
            this.user.googleAvatar = auth.google.profileImageURL;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, angularfire2_1.AngularFire, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map