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
var file_uploader_component_1 = require('../file-uploader/file-uploader.component');
var user_1 = require('../shared/user');
var FileUploadComponent = (function () {
    function FileUploadComponent(af) {
        this.af = af;
        this.options = {
            url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media',
            authToken: user_1.user.googleToken,
            withCredentials: true
        };
        this.uploadProgress = 0;
        this.fileUploadResponse = [];
        this.zone = new core_1.NgZone({ enableLongStackTrace: false });
    }
    FileUploadComponent.prototype.handleDropUpload = function (data) {
        var _this = this;
        var index = this.fileUploadResponse.findIndex(function (x) { return x.id === data.id; });
        if (index === -1) {
            this.fileUploadResponse.push(data);
        }
        else {
            this.zone.run(function () {
                _this.fileUploadResponse[index] = data;
            });
        }
        var total = 0, uploaded = 0;
        this.fileUploadResponse.forEach(function (resp) {
            total += resp.progress.total;
            uploaded += resp.progress.loaded;
        });
        this.uploadProgress = Math.floor(uploaded / (total / 100));
    };
    FileUploadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-file-upload',
            templateUrl: 'file-upload.component.html',
            styleUrls: ['file-upload.component.css'],
            directives: [file_uploader_component_1.UPLOAD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file-upload.component.js.map