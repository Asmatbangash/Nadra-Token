import{ Router } from 'express'
import { userRegister } from "../controllers/userRegister.controller.js";

const router = Router()

router.route('/register').post(userRegister)

export {router}