import express from 'express'
import authMiddleware from '../../middleware/auth.middleware.js';
import bookController from './book.controller.js';



const bookRouter = express.Router()



bookRouter.get('/', authMiddleware.isPremited, bookController.getUserBooks);

export default bookRouter;