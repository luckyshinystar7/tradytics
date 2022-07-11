const productService = require('../services/productService')

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  res.status(200).json(products);
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const product = await productService.getById(id);

  res.status(200).json(product);
};

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await productService.add(name, brand);

  res.status(201).json(newProduct);
}

const deleteById = async (req, res) => {
  const products = await productService.exclude(req.params.id);

  res.status(204).json(products);
};

const update = async (req, res) => {
  const { name, brand } = req.body;

  const products = await productService.update(req.params.id, name, brand);

  res.status(200).json(products);
};

module.exports = {
  getAll,
  getById,
  add,
  deleteById,
  update,
};
