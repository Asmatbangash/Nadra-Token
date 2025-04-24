import User from "../models/User.model"
import { apiError } from "../utils/apiError.utils"
import jwt from 'jsonwebtoken'

const verifyJwt = async(req, res, next) => {
 const token = req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
 
 if(!token){
    throw new apiError(401, "unautherized request")
 }
 const decodedToken = jwt.verify("accessToken", process.env.ACCESS_TOKEN_SECRET)

 const user = await User.findById(decodedToken?._id)

 if(!user){
   throw new apiError(401, "unauthorized token")
 }

 req.user = user
 next()
}

export {
       verifyJwt
}