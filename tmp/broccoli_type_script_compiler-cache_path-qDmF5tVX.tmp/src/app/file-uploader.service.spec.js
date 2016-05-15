"use strict";
var testing_1 = require('@angular/core/testing');
var file_uploader_service_1 = require('./file-uploader.service');
testing_1.describe('FileUploader Service', function () {
    testing_1.beforeEachProviders(function () { return [file_uploader_service_1.FileUploaderService]; });
    testing_1.it('should ...', testing_1.inject([file_uploader_service_1.FileUploaderService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=file-uploader.service.spec.js.map