const express = require('express');
const book = require('../models/book');
const bookService = require('../services/bookService');
const bookRouter = express.Router();

bookRouter.get('/', async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

bookRouter.post('/', async (req, res) => {
  const newBook = await bookService.create(req.body);
  return res.status(201).json(newBook);
});

module.exports = bookRouter;
