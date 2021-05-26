import express from 'express';
import {
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
  getPostComments,
  commentOnPost,
  likePost,
  unlikePost,
} from '../controllers/postController.js';
import { getUserTimeline } from '../controllers/userController.js';

// '/api/posts'
const postRouter = express.Router();
postRouter('/').get(getUserTimeline).post(createPost);

postRouter
  .route('/:id')
  .get(getPostById)
  .put(updatePostById)
  .delete(deletePostById);

//RemoveLikeFromPost
//LikePost
postRouter.route('/:postId/like').post(likePost).delete(unlikePost);

//GET - all comments on post
//POST - comment on a post
postRouter.route('/:postId/comment').get(getPostComments).post(commentOnPost);

export default postRouter;
