import {type Request, type Response} from 'express';
import { StatusCodes } from '../constant/statusCodes';
class TestController{
    async test(req:Request,res:Response){
        try{
            console.log('haha')
            res.status(StatusCodes.SUCCESS).json('haha')
        }catch(error){
        console.log("🚀 ~ TestController ~ test ~ error:", error)

        }
    }
}
export default new TestController