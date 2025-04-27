import{ Router } from 'express'
import { userRegister, userLogin, userLogOut, refreshAccessToken, getCurrentUser, changeCurrentUserPassword, changeAcountDetail } from '../controllers/user.controller.js'
import { verifyJwt } from '../middleware/Auth.middlware.js'
const router = Router()

router.route('/register').post(userRegister)
router.route('/logIn').post(userLogin)
router.route('/logOut').post(verifyJwt,userLogOut)
router.route('/refresh-token').post(refreshAccessToken)
router.route('/current-user').get(verifyJwt, getCurrentUser)
router.route('/change-password').post(verifyJwt, changeCurrentUserPassword)
router.route('/change-acount-detail').post(verifyJwt,changeAcountDetail)

export {router}