import User from "../models/User.model.js"
import { apiError } from "../utils/apiError.utils.js"
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../utils/asyncHandler.js"

const verifyJwt = asyncHandler(async(req, res, next) => {
  const token = req.cookies.accessToken || req.header("Authorization").replace("Bearer ", "")
  
  if(!token){
     throw new apiError(401, "unautherized request")
  }
   
  const decodedToken =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRETE)
                        
  const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
 
  if(!user){
    throw new apiError(401, "unauthorized access token")
  }
 
  req.user = user
  next()
 
})

export {
       verifyJwt
}