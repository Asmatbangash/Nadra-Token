import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    FatherName: {
        type: String,
        required: true,
    },
    ContactNo:{
        type: Number,
        required: true,
    },
    TokenNo:{
        type: Number,
        required: true,
    }

},{timestamps: true})

export const token = mongoose.model('token', tokenSchema)