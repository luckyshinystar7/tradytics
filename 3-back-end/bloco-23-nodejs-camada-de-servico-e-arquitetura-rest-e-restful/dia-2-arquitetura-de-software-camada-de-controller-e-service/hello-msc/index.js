// index.js

const express = require('express');

const rescue = require('express-rescue');

const Author = require('./controllers/Authors');

const app = express();

app.use(express.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
