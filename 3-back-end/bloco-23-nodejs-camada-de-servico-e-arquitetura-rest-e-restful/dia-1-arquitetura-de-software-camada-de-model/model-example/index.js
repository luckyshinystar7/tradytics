// index.js

const express = require('express');

const Author = require('./models/Author.js');
const Book = require('./models/Book.js');

const app = express();

app.use(express.json());

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

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
  return
});

// 2.1 - Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' }.
app.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getBookById(id);

  if (!book) return res.status(404).json({ message: "Not Found" });

  res.status(200).json(book);
  return
})

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.validateAuthorId(author_id) || !Book.validateTitle(title)) {
    return res.status(400).json({ message: "Dados inválidos" })
  }

  await Book.create(title, author_id);
  return res.status(201).json({ message: 'Livro criado com sucesso!' })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
