import express from 'express';
import { allBook, createBook } from '../Contoller/BookContoller.js';

// init router

const router = express.Router();

// create routes
router.get('/', allBook);
router.post('/', createBook);

// export default router

export default router  