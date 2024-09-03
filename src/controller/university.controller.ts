import {type Request, type Response} from 'express';
import { StatusCodes } from '../constant/statusCodes';
import universityService from '../services/university.service';
class UniversityController{
    async createUniversity(req:Request,res:Response){
        try{
           
            // res.status(StatusCodes.SUCCESS).json('haha')
            const body= req.body
            console.log("🚀 ~ UniversityController ~ createUniversity ~ body:", body)
            const data = await universityService.createUniversity(req.body)
            res.status(StatusCodes.SUCCESS).json({
                data:data
            })
        }catch(error:any){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:error.message
            })
        }
    }
}
export default new UniversityController