// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

const booksId = '/books/:id';

router.get('/books', booksController.getAll);

router.get(booksId, booksController.getById);

router.post('/books/', validationBook, booksController.create);

router.put(booksId, validationBook, booksController.update);

router.delete(booksId, validationBook, booksController.remove);

export default router;