import {type Request, type Response} from 'express';
import { StatusCodes } from '../constant/statusCodes';
import universityService from '../services/university.service';
class UniversityController{
    async createUniversity(req:Request,res:Response){
        try{
           
            res.status(StatusCodes.SUCCESS).json('haha')
            const data = await universityService.createUniversity(req.body)
        }catch(error){
        console.log("🚀 ~ TestController ~ test ~ error:", error)
        }
    }
}
export default new UniversityController