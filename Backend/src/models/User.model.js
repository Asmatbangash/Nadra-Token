import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: Number,
        required: true
    }
    
})

const User = mongoose.model("User", userSchema)

export default User