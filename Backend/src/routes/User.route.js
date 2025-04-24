import{ Router } from 'express'
import { userRegister, userLogin, userLogOut } from '../controllers/user.controller.js'
import { verifyJwt } from '../middleware/Auth.middlware.js'
const router = Router()

router.route('/register').post(userRegister)
router.route('/logIn').post(userLogin)
router.route('/logOut').get(verifyJwt,userLogOut)

export {router}