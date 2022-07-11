const productModel = require('../models/productModel');

const getAll = async () => {
  try {
    return await productModel.getAll();
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = {
  getAll,
};
