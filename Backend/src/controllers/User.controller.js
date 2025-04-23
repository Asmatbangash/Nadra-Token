import User from "../models/User.model.js"
import { apiError } from "../utils/apiError.utils.js"
import { apiResponse } from "../utils/apiResponse.js"


const userRegister = async (req, res, next) =>{
  // get data from frontend -> req.body
  // check validaion 
  // find the user in database
  // send the response
  
 try {
   const {userName, email, password, fullName} = req.body
   
   if([userName, email, password, fullName].some((field) => field?.trim() === "")){
    throw new apiError(400,"all fields are required")
   }
 
   
   const existedUser = await User.findOne({
     $or: [{ userName }, { email }]
   })
   
   if(existedUser){
     throw new apiError(409, 'userName or email already exist!')
   }
   const user = await User.create({
      userName,
      email,
      password,
      fullName
    })
 
   const createdUser = await User.findById(user._id).select("-password")
 
   if(!createdUser){
     throw new apiError(500, "interval server error while register user")
   }
 
   return res.status(201).json(new apiResponse(200, createdUser, "user register successfully!") )
 } catch (error) {
      throw new apiError(500, 'there are some error in user registration...') 
 }
}

export {userRegister}