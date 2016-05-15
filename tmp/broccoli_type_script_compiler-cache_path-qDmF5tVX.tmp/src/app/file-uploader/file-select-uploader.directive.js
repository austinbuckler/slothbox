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
var file_uploader_service_1 = require('./file-uploader.service');
var FileSelectUploader = (function () {
    function FileSelectUploader(el) {
        var _this = this;
        this.el = el;
        this.onUpload = new core_1.EventEmitter();
        this.uploader = new file_uploader_service_1.FileUploaderService();
        setTimeout(function () {
            _this.uploader.setOptions(_this.options);
        });
        this.uploader._emitter.subscribe(function (data) {
            _this.onUpload.emit(data);
        });
    }
    FileSelectUploader.prototype.onFiles = function () {
        var files = this.el.nativeElement.files;
        if (files.length) {
            this.uploader.addFilesToQueue(files);
        }
    };
    FileSelectUploader = __decorate([
        core_1.Directive({
            selector: '[FileSelectUploader]',
            inputs: ['options: FileSelectUploader'],
            outputs: ['onUpload']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FileSelectUploader);
    return FileSelectUploader;
}());
exports.FileSelectUploader = FileSelectUploader;
//# sourceMappingURL=file-select-uploader.directive.js.map