import { Token } from "../models/Token.model.js";
import { apiError } from "../utils/apiError.utils.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const generateToken = asyncHandler(async(req, res, next) =>{
    // get data from frontend -> req.body
    // check data that's come or con't come
    // if con't come then throw error
    // if come then generate token 
    // and then send response

    const {Name, FatherName, ContactNo} = req.body

    if([Name, FatherName, ContactNo].some((fields) => fields.trim() === "")){
        throw new apiError(400,"all fields are required!..." )
    }

    const latestToken = await Token.findOne().sort({ TokenNo: -1 });
    const TokenNo = latestToken ? latestToken.TokenNo + 1 : 1;
     console.log(TokenNo)
    const token = await Token.create({
        Name: Name,
        FatherName: FatherName,
        ContactNo: ContactNo,
        TokenNo,
    })

    return res
    .status(200)
    .json(new apiResponse(
        200,
        token,
        "Token genereted successfully!"
    ))
})

export {
    generateToken
}