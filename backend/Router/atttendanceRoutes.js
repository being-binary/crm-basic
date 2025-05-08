import express from 'express'
import attendenceController from '../Controller/attendenceController.js'

const router = express.Router()

router.get('/getdata', attendenceController.getData)

export default router