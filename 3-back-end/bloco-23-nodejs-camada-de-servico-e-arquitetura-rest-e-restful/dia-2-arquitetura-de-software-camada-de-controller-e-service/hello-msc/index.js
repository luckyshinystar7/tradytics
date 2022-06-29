// index.js

const express = require('express');

const rescue = require('express-rescue');

const Author = require('./controllers/Authors');

const app = express();

app.use(express.json());

app.get('/authors', rescue(Author.getAll));

app.get('/authors/:id', rescue(Author.findById));

app.post('/authors', rescue(Author.createAuthor));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
