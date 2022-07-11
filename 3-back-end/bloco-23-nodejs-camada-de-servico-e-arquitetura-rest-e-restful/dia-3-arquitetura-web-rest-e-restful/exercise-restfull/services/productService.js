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
    const result = await productModel.getById(id);
    if (!result.length) return null;
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const add = async (name, brand) => {
  try {
    const result = await productModel.add(name, brand);
    return { id: result.id, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const result = await productModel.update(id, name, brand);
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return { message: "produto não encontrado" };
    await productModel.exclude(id);
    return { message: `Id ${id} removido com sucesso` };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};
