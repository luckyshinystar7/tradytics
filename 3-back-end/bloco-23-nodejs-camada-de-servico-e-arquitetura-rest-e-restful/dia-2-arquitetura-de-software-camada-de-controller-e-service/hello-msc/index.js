// index.js
const express = require('express');

const rescue = require('express-rescue');

const Author = require('./controllers/Author');

const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.get('/authors', rescue(Author.getAll));

app.get('/authors/:id', rescue(Author.findById));

app.post('/authors', rescue(Author.createAuthor));

app.use(errorMiddleware);

const PORT = 3000;

// console.log(process.env) // localhost

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
