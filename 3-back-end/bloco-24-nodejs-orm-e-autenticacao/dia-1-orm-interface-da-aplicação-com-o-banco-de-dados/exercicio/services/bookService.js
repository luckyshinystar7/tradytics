const { Book } = require('../models');

const getAll = () => {
  return Book.findAll();
};

const getById = (id) => {
  return Book.findByPk(id);
};

const update = async (id, { title, author, pageQuantity }) => {
  const bookExists = await getById(id);
  if (!bookExists) return { code: 404, message: 'Book not found!' };

  const [rowsUpdated] = await Book.update({
    title, author, page_quantity: pageQuantity,
  }, {
    where: { id }
  });
  console.log(rowsUpdated);
  if (rowsUpdated < 1) return { code: 500, message: 'Update failed!' }
  return { code: 200, message: 'Book updated!' }
};

const create = ({ title, author, pageQuantity }) => {
  return Book.create({ title, author, page_quantity: pageQuantity });
}

module.exports = {
  getAll,
  create,
  update,
};
