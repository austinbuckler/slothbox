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
var angularfire2_1 = require('angularfire2');
var register_form_component_1 = require('./register/register-form.component');
var login_component_1 = require('./login/login.component');
var SlothboxAppComponent = (function () {
    function SlothboxAppComponent(af) {
        this.title = exports.appName;
        this.registration = false;
        this.login = false;
        this.welcome = "Welcome to Sloth Box the all in one cloud storage manager!";
    }
    SlothboxAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slothbox-app',
            templateUrl: 'slothbox.component.html',
            styleUrls: ['slothbox.component.css'],
            directives: [register_form_component_1.RegisterFormComponent, login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], SlothboxAppComponent);
    return SlothboxAppComponent;
}());
exports.SlothboxAppComponent = SlothboxAppComponent;
exports.appName = 'nimbus';
//# sourceMappingURL=slothbox.component.js.map