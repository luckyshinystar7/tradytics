const { Book } = require('../models');

const getAll = () => {
  return Book.findAll();
};

const create = ({title, author, pageQuantity}) => {
  return Book.create({title, author, page_quantity: pageQuantity});
}

module.exports = {
  getAll,
  create,
};
