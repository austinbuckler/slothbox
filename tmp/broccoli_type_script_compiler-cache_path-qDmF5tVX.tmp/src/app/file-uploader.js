"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var file_uploader_service_1 = require('./file-uploader.service');
var file_select_uploader_directive_1 = require('./file-select-uploader.directive');
var file_drop_uploader_directive_1 = require('./file-drop-uploader.directive');
__export(require('./file-uploader.service'));
__export(require('./file-select-uploader.directive'));
__export(require('./file-drop-uploader.directive'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [file_select_uploader_directive_1.FileSelectUploader, file_drop_uploader_directive_1.FileDropUploader],
    providers: [file_uploader_service_1.FileUploaderService]
};
exports.UPLOAD_DIRECTIVES = [file_select_uploader_directive_1.FileSelectUploader, file_drop_uploader_directive_1.FileDropUploader];
//# sourceMappingURL=file-uploader.js.map