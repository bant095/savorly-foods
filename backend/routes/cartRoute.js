import express from 'express';
import {
  addToCart,
  removeFromCart,
  getCart,
} from '../controllers/cartController.js';

import authMiddleware from '../middleware/auth.js';

//express router
const cartRouter = express.Router();

//with the cart we will create multiple end points
cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeFromCart);
cartRouter.post('/get', authMiddleware, getCart);

export default cartRouter;
