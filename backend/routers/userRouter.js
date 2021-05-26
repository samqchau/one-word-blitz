import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import {} from '../controllers/userController.js';

// '/api/users
const userRouter = express.Router();

userRouter.route('/').get(protect, adminOnly, getAllUsers).post(registerUser);

userRouter.route('/login').post(authUser);

userRouter
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

userRouter
  .route('/:id')
  .get(protect, adminOnly, getUserById)
  .delete(protect, adminOnly, deleteUser)
  .put(protect, adminOnly, updateUserById);

export default userRouter;
