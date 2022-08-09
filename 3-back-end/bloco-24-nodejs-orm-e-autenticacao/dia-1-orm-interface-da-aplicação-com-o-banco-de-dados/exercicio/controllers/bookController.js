const express = require('express');
const bookService = require('../services/bookService');
const router = express.router();

router.getAll('/', async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

module.exports = router;
