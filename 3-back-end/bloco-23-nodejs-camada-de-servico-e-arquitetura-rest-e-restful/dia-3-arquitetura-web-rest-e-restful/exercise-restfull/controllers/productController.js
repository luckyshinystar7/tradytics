const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

const getAll = async(_req, res) => {
  const products = await ProductModel.getAll();

  res.send(products);
};

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
}

router.post('/delete-product/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.post('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = {
  getAll,
  add,
}
