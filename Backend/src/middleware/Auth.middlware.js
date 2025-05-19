import User from '../models/User.model.js';
import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';

const verifyJwt = asyncHandler(async (req, res, next) => {
  let token = req.cookies?.accessToken;
  // If not in cookies, try Authorization header
  if (!token && req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]; // Get token part
  }

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Unauthorized request: No token provided' });
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }

  const user = await User.findById(decodedToken?._id).select(
    '-password -refreshToken'
  );

  if (!user) {
    return res
      .status(401)
      .json({ message: 'Unauthorized: Invalid token user' });
  }

  req.user = user;
  next();
});

export { verifyJwt };
