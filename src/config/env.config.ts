import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(process.cwd(),'.env')})
export class DotenvConfig{
    static NODE_ENV = process.env.NODE_ENV
    static PORT = +process.env.PORT!



    static DATABASE_HOST = process.env.DATABASE_HOST
    static DATABASE_PORT = +process.env.DATABASE_PORT!
    static DATABASE_USERNAME = process.env.DATABASE_USERNAME
    static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
    static DATABASE_NAME = process.env.DATABASE_NAME


    static ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!
    static ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN!
    static REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!
    static REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN!


    static BASE_URL = process.env.BASE_URL!


    static CORS_ORIGIN = process.env.CORS_ORIGIN?.split(', ') || []



    static API_KEY = process.env.API_KEY
}