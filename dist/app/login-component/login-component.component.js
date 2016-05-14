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
var user_1 = require('../db_table_models/user');
var LoginComponentComponent = (function () {
    function LoginComponentComponent() {
        this.model = new user_1.User(1, 'example@example.com', 'test');
        this.submitted = false;
    }
    LoginComponentComponent.prototype.ngOnInit = function () {
    };
    LoginComponentComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(LoginComponentComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    LoginComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: 'login-component.component.html',
            styleUrls: ['login-component.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponentComponent);
    return LoginComponentComponent;
}());
exports.LoginComponentComponent = LoginComponentComponent;
//# sourceMappingURL=login-component.component.js.map