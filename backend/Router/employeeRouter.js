import express from 'express'
import employeeController from '../Controller/employeeController.js'
import FileUpload from '../services/fileUpload.js';
const router = express.Router()

router.post('/setdata', FileUpload.uploadtophotos.array('file', 12),FileUpload.uploadEmployeesFiles ,employeeController.setEmployeeData)

export default router