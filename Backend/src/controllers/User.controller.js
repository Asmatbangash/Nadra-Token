import User from '../models/User.model.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';

// change cookies only vai backend
const options = {
  httpOnly: true,
  secure: true,
};

// generate access and refresh token method
const generateAccessAndRefreshToken = async userId => {
  const user = await User.findById(userId);
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

// user register controller
const userRegister = asyncHandler(async (req, res, next) => {
  // get data from frontend -> req.body
  // check validaion
  // find the user in database
  // send the response

  const { fullName, userName, email, password } = req.body;

  if (
    [userName, email, password, fullName].some(field => field?.trim() === '')
  ) {
    return res.status(400).json({ message: 'all fields are required' });
  }

  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser) {
    return res
      .status(400)
      .json((409, 'username or email already exist!. please try again!..'));
  }
  const user = await User.create({
    userName,
    email,
    password,
    fullName,
  });

  const createdUser = await User.findById(user._id).select('-password');

  if (!createdUser) {
    return res
      .status(400)
      .json((500, 'interval server error while register user'));
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    createdUser._id
  );

  return res
    .status(201)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(new apiResponse(200, createdUser, 'user register successfully!'));
});

// user login controller
const userLogin = asyncHandler(async (req, res) => {
  //  steps
  //  get data from -> req.body
  //  check validation
  //  find the user
  // check password
  // generate access and refresh tokens
  // send cokies

  const { userName, email, password } = req.body;

  if (!(userName || email)) {
    return res.status(400).json({ message: 'username or email is required' });
  }

  const user = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (!user) {
    return res.status(401).json({ message: 'invalid email or username!...' });
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password!' });
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new apiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        'user successfull loggedIn!'
      )
    );
});

// user logOut controller
const userLogOut = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user?._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  return res
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new apiResponse(200, {}, 'user logOut successfully!'));
});

// refreshAccessToken for avoid giving multiple times username, email or password
const refreshAccessToken = asyncHandler(async (req, res) => {
  const inComingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!inComingRefreshToken) {
    return res.status(400).json({ message: 'unauthorized refresh token' });
  }

  const decodedToken = jwt.verify(
    inComingRefreshToken,
    process.env.REFRESH_TOKEN_SECRETE
  );

  const user = await User.findById(decodedToken?._id).select('-password');

  if (!user) {
    return res.status(400).json({ message: 'invalid refresh token' });
  }

  if (inComingRefreshToken !== user?.refreshToken) {
    return res.status(400).json({ message: 'the token is expired or used!' });
  }

  const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', newRefreshToken, options)
    .json(
      new apiResponse(
        200,
        { accessToken, refreshToken: newRefreshToken },
        'Access Token Refresh'
      )
    );
});

// get current user
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new apiResponse(200, req.user, 'current user fetched successfully!'));
});

// change current user password
const changeCurrentUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!(oldPassword && newPassword)) {
    return res.status(400).json({ message: 'all fields are required!..' });
  }

  const user = await User.findById(req.user?._id);

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'invalid old password' });
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new apiResponse(200, {}, 'password changed successfully!'));
});

// change current user acount details
const changeAcountDetail = asyncHandler(async (req, res) => {
  const { fullName, email } = req.body;

  if (!(fullName || email)) {
    return res.status(400).json({ message: 'all fields are required!...' });
  }

  const userChanges = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullName: fullName,
        email: email,
      },
    },
    {
      new: true,
    }
  ).select('-password');

  return res
    .status(200)
    .json(
      new apiResponse(
        200,
        userChanges,
        'user acount detail changed successfully!'
      )
    );
});

export {
  userRegister,
  userLogin,
  userLogOut,
  refreshAccessToken,
  getCurrentUser,
  changeCurrentUserPassword,
  changeAcountDetail,
};
