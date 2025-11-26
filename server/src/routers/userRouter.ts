import UserController from '../controllers/userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/login', UserController.login);
userRouter.post('/logout', UserController.logout);
userRouter.post('/refresh', UserController.refresh);

export default userRouter;
