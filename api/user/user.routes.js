import express from 'express'
import authMiddleware from '../../middleware/auth.middleware.js';
import userController from './user.controller.js';


const userRouter = express.Router()



userRouter.post('/signin ', userController.signIn);
userRouter.post('/create ', authMiddleware.isPremited, userController.createUser);

export default userRouter;