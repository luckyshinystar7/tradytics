// index.js

const express = require('express');

const Author = require('./models/Author.js');
const Book = require('./models/Book.js');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

// 1.2 Crie uma rota /books para trazer a lista de todos os livros;
// app.get('/books', async (_req, res) => {
//   const books = await Book.getAll();

//   res.status(200).json(books);
// });

// 1.3 Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id. Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.
app.get('/books', async (req, res) => {
  const id = req.query.author_id;
  if (!id) {
    const books = await Book.getAll();
    return res.status(200).json(books);
  }
  const books = await Book.getByAuthorId(id);
  return res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
