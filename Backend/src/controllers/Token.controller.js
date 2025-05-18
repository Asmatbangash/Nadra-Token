import { Token } from '../models/Token.model.js';
import User from '../models/User.model.js';
import { apiError } from '../utils/apiError.utils.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// generate Token
const generateToken = asyncHandler(async (req, res, next) => {
  // get data from frontend -> req.body
  // check data that's come or con't come
  // if con't come then throw error
  // if come then generate token
  // and then send response

  const { Name, FatherName, ContactNo } = req.body;

  if ([Name, FatherName, ContactNo].some(fields => fields.trim() === '')) {
    return res.status(400).json({ message: 'all fields are required!..' });
  }

  const user = await User.findById(req.user?._id).select(
    '-email -password -fullName'
  );
  const latestToken = await Token.findOne().sort({ TokenNo: -1 });
  const TokenNo = latestToken ? latestToken.TokenNo + 1 : 1;
  const token = await Token.create({
    user: user,
    Name: Name,
    FatherName: FatherName,
    ContactNo: ContactNo,
    TokenNo,
  });

  return res
    .status(200)
    .json(new apiResponse(200, token, 'Token genereted successfully!'));
});

// Update token detail
const updateToken = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { Name, FatherName, ContactNo } = req.body;

  if (!(Name || FatherName || ContactNo)) {
    return res.status(400).json({ message: 'there are some error in update' });
  }

  const updateTokenDetail = await Token.findByIdAndUpdate(
    id,
    {
      $set: {
        Name: Name,
        FatherName: FatherName,
        ContactNo: ContactNo,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(
      new apiResponse(
        200,
        updateTokenDetail,
        'Token Detail Successfully Updated!'
      )
    );
});

export { generateToken, updateToken };
