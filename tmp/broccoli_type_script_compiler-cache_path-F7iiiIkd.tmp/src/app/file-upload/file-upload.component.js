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
var file_1 = require('../model/file');
var FileUploadComponent = (function () {
    function FileUploadComponent(af) {
        this.af = af;
        this.model = new file_1.File("asdf", this.af.auth.getAuth().uid, "test", 0);
        this.submitted = false;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(FileUploadComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FileUploadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-file-upload',
            templateUrl: 'file-upload.component.html',
            styleUrls: ['file-upload.component.css']
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file-upload.component.js.map