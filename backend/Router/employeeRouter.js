import express from 'express'
import employeeController from '../Controller/employeeController.js'

const router = express.Router()

router.post('/setdata', employeeController.setEmployeeData)

export default router