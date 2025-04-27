import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        unique : true,
        required: true,
        trim: true,
        lowercase: true,
        index: true
    }, 
    email:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    refreshToken:{
        type: String
    }
    
}, {timestamps: true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    } 

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await  bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function() {
   return jwt.sign(
        {
        _id: this._id,
        email: this.email,
        userName: this.userName,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRETE,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken = function(){
  return  jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRETE,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("User", userSchema)

export default User