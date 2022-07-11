const express = require('express');
const ProductModel = require('../models/productModel');
const productService = require('../services/productServices')

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  res.send(products);
};

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
}


const deleteById = async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
};

const update = async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
};

module.exports = {
  getAll,
  add,
  deleteById,
  update,
};
