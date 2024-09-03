import express from 'express'
import { catchAsync } from '../utils/catchAsync.utils'
import TestController from '../controller/test.controller'
const router = express.Router()
router.get('/',catchAsync(TestController.test))
export default router