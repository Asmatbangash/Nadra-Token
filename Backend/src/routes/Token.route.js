import{ Router } from 'express'
import { verifyJwt } from '../middleware/Auth.middlware.js'
import { generateToken, updateToken } from '../controllers/Token.controller.js'
const tokenRoute = Router()

// user routes
tokenRoute.route('/generate-token').post(verifyJwt,generateToken)
tokenRoute.route('/update-token-detail/:id').patch(verifyJwt, updateToken)





export {tokenRoute}