import cors from 'cors'
import express,{NextFunction,Request,Response,type Application} from 'express'
import {DotenvConfig} from '../config/env.config'
import {StatusCodes} from '../constant/statusCodes'
import routes from '../routes/index.route'
import morgan from 'morgan'
const middleWare=(app:Application)=>{
    console.log('')
    app.use(
        cors({
            origin:DotenvConfig.CORS_ORIGIN,
            methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        })
    )
    app.use((req: Request, res: Response, next: NextFunction) => {
        const userAgent = req.headers['user-agent']
        const apiKey = req.headers['apikey']
        console.log("🚀 ~ app.use ~ apiKey:", apiKey)
        console.log("🚀 ~ app.use ~ DotenvConfig.API_KEY:", DotenvConfig.API_KEY)
        if (userAgent && userAgent.includes('Mozilla')) {
          next()
        } else {
          if (apiKey === DotenvConfig.API_KEY) next()
          else res.status(StatusCodes.FORBIDDEN).send('Forbidden')
        }
      })
    app.use(morgan('common'))
    app.use(express.urlencoded({extended:false}))
    app.use('/api',routes)
}
export default middleWare