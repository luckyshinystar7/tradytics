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

bookRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const editBook = await bookService.update(id, req.body);
    const { code, message } = editBook;
    return res.status(code).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

bookRouter.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const removedBook = await bookService.remove(id);
    if (removedBook) return res.status(204).json({message: `Book ${id} deleted!`});
    return res.status(500).json({message:'Algo deu errado!'})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

bookRouter.post('/', async (req, res) => {
  const newBook = await bookService.create(req.body);
  return res.status(201).json(newBook);
});

module.exports = bookRouter;
