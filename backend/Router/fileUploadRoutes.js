import express from 'express'
import FileUpload from '../services/fileUpload.js';
import attendenceController from '../Controller/attendenceController.js';
class FileUploadRoutes {
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/file',   FileUpload.uploadtophotos.array('file', 12), FileUpload.uploadFiles, attendenceController.setValues);
    }
}

export default new FileUploadRoutes().router