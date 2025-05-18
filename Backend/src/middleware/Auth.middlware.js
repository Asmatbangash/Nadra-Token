import User from '../models/User.model.js';
import { apiError } from '../utils/apiError.utils.js';
import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';

const verifyJwt = asyncHandler(async (req, res, next) => {
  const token = req.Cookies.accessToken;
  // header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'unautherized request' });
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE);

  const user = await User.findById(decodedToken?._id).select(
    '-password -refreshToken'
  );

  if (!user) {
    return res.status(401).json({ message: 'unauthorized access token' });
  }

  req.user = user;
  next();
});

export { verifyJwt };
