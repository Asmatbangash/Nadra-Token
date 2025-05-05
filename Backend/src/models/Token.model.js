import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Name:{
        type: String,
        required: true,
        trim: true
    },
    FatherName: {
        type: String,
        required: true,
        trim: true
    },
    ContactNo:{
        type: Number,
        required: true,
        trim: true
    },
    TokenNo:{
        type: Number,
        required: true,
        trim: true
    }

},{timestamps: true})

export const Token = mongoose.model('Token', tokenSchema)