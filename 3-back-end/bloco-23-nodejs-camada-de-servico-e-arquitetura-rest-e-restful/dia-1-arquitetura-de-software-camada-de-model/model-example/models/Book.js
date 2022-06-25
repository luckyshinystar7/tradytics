
const connection = require('./connection');

// 1.1 - Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;
const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;',
  );
  return books;
};

module.exports = {
  getAll,
};
