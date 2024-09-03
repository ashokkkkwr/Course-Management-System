import {Router,type Request, type Response} from 'express'
import test from './test.route'
import university from './university.route'

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
      {
        path: '/university',
        route: university,
      },

]
routes.forEach((route)=>{
    router.use(route.path,route.route)
})
export default router