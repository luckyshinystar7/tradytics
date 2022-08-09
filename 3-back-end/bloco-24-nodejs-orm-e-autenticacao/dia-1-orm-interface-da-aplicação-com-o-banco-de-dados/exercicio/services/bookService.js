const { Book } = require('../models');

const getAll = () => {
  return Book.findAll();
};

module.exports = {
  getAll
};
