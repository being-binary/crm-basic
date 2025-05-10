import express from 'express'
import FileUpload from '../services/fileUpload.js';
import attendenceController from '../Controller/attendenceController.js';
import salaryController from '../Controller/salaryController.js';
class FileUploadRoutes {
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/file',   FileUpload.uploadtophotos.array('file', 12), FileUpload.uploadFiles, attendenceController.setValues);
        this.router.post('/salary',   FileUpload.uploadtophotos.array('file', 12), FileUpload.uploadSalaryFiles, salaryController.ExcelSalaryUpload);
    }
}

export default new FileUploadRoutes().router