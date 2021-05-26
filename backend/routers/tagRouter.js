import express from 'express';
import {
  createNewTag,
  deleteTagById,
  getAllTags,
  getPostsWithTagId,
} from '../controllers/tagController.js';

// '/api/tags'
/*
-get all tags
-create new tag
-delete tag by id adminOnly
*/
const tagRouter = express.Router();
tagRouter.route('/').get(getAllTags).post(createNewTag);
tagRouter.route('/:tagId').get(getPostsWithTagId).delete(deleteTagById);

export default tagRouter;
