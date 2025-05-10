import express from 'express'
import salaryController from '../Controller/salaryController.js';

class FileUploadRoutes {
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/getsalarydata', salaryController.getSalaryData);
    }
}

export default new FileUploadRoutes().router