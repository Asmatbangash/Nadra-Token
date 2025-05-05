import{ Router } from 'express'
import { userRegister, userLogin, userLogOut, refreshAccessToken, getCurrentUser, changeCurrentUserPassword, changeAcountDetail } from '../controllers/User.controller.js'
import { verifyJwt } from '../middleware/Auth.middlware.js'
const userRoute = Router()

// user routes
userRoute.route('/register').post(userRegister)
userRoute.route('/logIn').post(userLogin)
userRoute.route('/logOut').post(verifyJwt,userLogOut)
userRoute.route('/refresh-token').post(refreshAccessToken)
userRoute.route('/current-user').get(verifyJwt, getCurrentUser)
userRoute.route('/change-password').patch(verifyJwt, changeCurrentUserPassword)
userRoute.route('/change-acount-detail').patch(verifyJwt,changeAcountDetail)





export {userRoute}