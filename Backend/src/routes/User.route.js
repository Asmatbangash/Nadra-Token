import{ Router } from 'express'
import { userRegister, userLogin, userLogOut, refreshAccessToken, getCurrentUser, changeCurrentUserPassword, changeAcountDetail } from '../controllers/User.controller.js'
import { verifyJwt } from '../middleware/Auth.middlware.js'
import { generateToken } from '../controllers/Token.controller.js'
const router = Router()

// user routes
router.route('/register').post(userRegister)
router.route('/logIn').post(userLogin)
router.route('/logOut').post(verifyJwt,userLogOut)
router.route('/refresh-token').post(refreshAccessToken)
router.route('/current-user').get(verifyJwt, getCurrentUser)
router.route('/change-password').patch(verifyJwt, changeCurrentUserPassword)
router.route('/change-acount-detail').patch(verifyJwt,changeAcountDetail)

// Token routes
router.route('/generate-token').post(generateToken)



export {router}