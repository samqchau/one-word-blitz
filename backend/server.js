//dependencies
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import cors from 'cors';

//Routers
import userRouter from './Router/userRouter.js';

//inits and variables
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/likes', likeRouter);
app.use('/api/comments', commentRouter);
app.use('/api/tags', tagRouter);

//routers
/*
User Router
Post Router
Likes Router
Tags / Categories Router
*/
//error handlers

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.underline
      .bold
  );
});
