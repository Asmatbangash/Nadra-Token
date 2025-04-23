import User from "../models/User.model.js"
import { apiError } from "../utils/apiError.utils.js"
import { apiResponse } from "../utils/apiResponse.js"

// generate access and refresh token method
const generateAccessAndRefreshToken = async(userId) =>{
  const user = await User.findById(userId)
  const accessToken = user.generateAccessToken()
  const refreshToken = user.generateRefreshToken()

  user.refreshToken = refreshToken
  user.save({validateBeforeSave: false})

  return {accessToken, refreshToken}
}

// user register controller 
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

// user login controller
const userLogin = async(req, res) =>{
  //  steps
  //  get data from -> req.body
  //  check validation
  //  find the user
  // check password
  // generate access and refresh tokens
  // send cokies

  const {userName, email, password} = req.body

  if(!(userName || email)){
    throw new apiError(401, 'userName or email is required')
  }

  const user = await User.findOne({
    $or: [{ userName }, { email }]
  })

  const isPasswordValid = user.isPasswordCorrect(password)

  if(!isPasswordValid){
    throw new apiError(401, 'Invalid password!')
  }

 const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
 
 const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

 const option = {
  httpOnly: true,
  secure: true
 }

 res.status(200)
 .cookie("accessToken", accessToken, option)
 .cookie("refreshToken", refreshToken, option)
 .json(
  new apiResponse(
    200, 
    {
      user: loggedInUser, accessToken, refreshToken
    }, 
    "user successfull loggedIn!"
  )
 )

}

export {
  userRegister,
  userLogin
}