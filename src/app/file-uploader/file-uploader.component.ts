import {FileUploaderService} from './file-uploader.service';
import {FileSelectUploader} from './file-select-uploader.directive';
import {FileDropUploader} from './file-drop-uploader.directive';

export * from './file-uploader.service';
export * from './file-select-uploader.directive';
export * from './file-drop-uploader.directive';

export default {
  directives: [FileSelectUploader, FileDropUploader],
  providers: [FileUploaderService]
}

export const UPLOAD_DIRECTIVES: [any] = [FileSelectUploader, FileDropUploader];