import express from 'express';
import {
  editCommentById,
  deleteCommentById,
} from '../controllers/commentController.js';

commentRouter = express.Router();

commentRouter.route('/').put(editCommentById).delete(deleteCommentById);

export default commentRouter;
