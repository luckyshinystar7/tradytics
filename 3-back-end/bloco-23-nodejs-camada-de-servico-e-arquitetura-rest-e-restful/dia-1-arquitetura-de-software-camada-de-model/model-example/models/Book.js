
const connection = require('./connection');

// 1.1 - Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;
const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;',
  );
  return books;
};

const getByAuthorId = async (authorId) => {
  const id = Number(authorId);
  const [books] = await connection.execute(
    `SELECT title, author_id FROM model_example.books where author_id = ${id};`,
  );
  return books;
}

// 2.1 - Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' }.

const getBookById = async (bookId) => {
  const id = Number(bookId);
  const [book] = await connection.execute(
    'SELECT * FROM model_example.books where id = ?;', [id]
  )
  return book;
};

const validateTitle = (title) => {
  if (!title || title === '') return false;
  if (title.length < 4) return false;
  return true;
} 

const validateAuthorId = async (author_id) => {
  if (!author_id || author_id === '') return false;
  const id = Number(author_id);
  const [author] = await connection.execute(
    'SELECT * FROM model_example.authors where id = ?;',
    [id]
  );
  if (!author) return false;
  return true;
}

module.exports = {
  getAll,
  getByAuthorId,
  getBookById,
  validateTitle,
  validateAuthorId,
};
