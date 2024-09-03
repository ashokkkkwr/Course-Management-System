import {Router,type Request, type Response} from 'express'
import test from './test.route'

export interface Route{

    path:string
    route:Router
}
const router=Router()
const routes:Route[]=[
    {
        path: '/test',
        route: test,
      },
]
routes.forEach((route)=>{
    router.use(route.path,route.route)
})
export default router