import express from 'express'
import { catchAsync } from '../utils/catchAsync.utils'
import universityController from '../controller/university.controller'
const router = express.Router()
router.post('/',catchAsync(universityController.createUniversity))
export default router