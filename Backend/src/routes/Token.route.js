import { Router } from 'express';
import { verifyJwt } from '../middleware/Auth.middlware.js';
import {
  deleteToken,
  generateToken,
  getAllTokenForAdmin,
  getToken,
  updateToken,
} from '../controllers/Token.controller.js';
const tokenRoute = Router();

// user routes
tokenRoute.route('/generate-token').post(verifyJwt, generateToken);
tokenRoute.route('/get-tokens').get(verifyJwt, getToken);
tokenRoute.route('/get-all-token').get(getAllTokenForAdmin);
tokenRoute.route('/update-token-detail/:id').patch(verifyJwt, updateToken);
tokenRoute.route('/delete-token/:id').delete(verifyJwt, deleteToken);

export { tokenRoute };
