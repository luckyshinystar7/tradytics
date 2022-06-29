// controllers/Authors.js

const Author = require('../services/Authors');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);

  // Caso não haja nenhum erro, retornamos o author encontrado
  return res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.createAuthor(first_name, middle_name, last_name);

  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
