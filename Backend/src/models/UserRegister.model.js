import mongoose from "mongoose";


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
        type: Number,
        required: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    }
    
}, {timestamps: true})

userSchema.pre("save", function(next){
    this.password = bcrypt.hash(this.password, 10)
    next()
})

const User = mongoose.model("User", userSchema)

export default User