import { Token } from '../models/Token.model.js';
import User from '../models/User.model.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// generate Token
const generateToken = asyncHandler(async (req, res, next) => {
  // get data from frontend -> req.body
  // check data that's come or con't come
  // if con't come then throw error
  // if come then generate token
  // and then send response

  const { fullName, fatherName, serviceType, contactNo } = req.body;

  if (
    [fullName, fatherName, serviceType, contactNo].some(
      field => field?.trim() === ''
    )
  ) {
    return res.status(400).json({ message: 'all fields are required' });
  }

  const user = await User.findById(req.user?._id).select('-email -password');
  const latestToken = await Token.findOne().sort({ TokenNo: -1 });
  const TokenNo = latestToken ? latestToken.TokenNo + 1 : 1;
  const token = await Token.create({
    user: user,
    fullName: fullName,
    fatherName: fatherName,
    contactNo: contactNo,
    serviceType: serviceType,
    TokenNo,
  });

  return res
    .status(200)
    .json(new apiResponse(200, token, 'Token genereted successfully!'));
});

// get token
const getToken = asyncHandler(async (req, res, next) => {
  const userTokens = await Token.find({ user: req.user._id });

  if (userTokens.length === 0) {
    return res.status(404).json({ message: 'No tokens found for this user.' });
  }

  return res
    .status(200)
    .json(new apiResponse(200, userTokens, 'Tokens successfully fetched!'));
});

// get all token for admin
const getAllTokenForAdmin = asyncHandler(async (req, res, next) => {
  const allToken = await Token.find();

  if (allToken.length === 0) {
    return res
      .status(404)
      .json({ message: 'There are no token Generated Yet!.' });
  }

  return res
    .status(200)
    .json(new apiResponse(200, allToken, 'All Token successfully fetched!'));
});

// Update token detail
const updateToken = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { fullName, fatherName, contactNo } = req.body;

  if (!(fullName || fatherName || contactNo)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const updateTokenDetail = await Token.findByIdAndUpdate(
    id,
    {
      $set: {
        fullName,
        fatherName,
        contactNo,
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

// delete token
const deleteToken = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'Token has been not delete' });
  }
  await Token.findByIdAndDelete(id, { new: true });

  return res
    .status(200)
    .json(new apiResponse(200, {}, 'Token deleted successfully!'));
});

export {
  generateToken,
  updateToken,
  deleteToken,
  getToken,
  getAllTokenForAdmin,
};
