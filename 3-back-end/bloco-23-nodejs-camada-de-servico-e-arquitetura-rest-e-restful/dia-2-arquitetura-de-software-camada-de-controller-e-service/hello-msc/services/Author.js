// services/Authors.js

const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return author;
};

const createAuthor = async (firstName, middleName, lastName) =>
  Author.createAuthor(firstName, middleName, lastName);

module.exports = {
  getAll,
  findById,
  createAuthor,
};
