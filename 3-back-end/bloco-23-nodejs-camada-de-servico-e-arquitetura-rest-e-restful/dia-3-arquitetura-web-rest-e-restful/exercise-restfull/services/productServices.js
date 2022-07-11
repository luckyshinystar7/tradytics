const productModel = require('../models/productModel');

const getAll = async () => {
  try {
    return await productModel.getAll();
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [result] = await productModel.getById(id);
    if (!result.length) return null;
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = {
  getAll,
  getById,
};
