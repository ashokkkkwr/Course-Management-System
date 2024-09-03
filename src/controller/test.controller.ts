import {type Request, type Response} from 'express';
import { StatusCodes } from '../constant/statusCodes';
class TestController{
    async test(req:Request,res:Response){
        try{
            res.status(StatusCodes.SUCCESS).json('hehe')
        }catch(error){
        console.log("🚀 ~ TestController ~ test ~ error:", error)
        }
    }
}
export default new TestController