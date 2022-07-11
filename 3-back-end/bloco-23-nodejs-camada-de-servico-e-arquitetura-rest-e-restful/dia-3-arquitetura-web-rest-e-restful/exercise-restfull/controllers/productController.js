const express = require('express');
const ProductModel = require('../models/productModel');
const productService = require('../services/productService')

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  res.send(products);
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const product = await productService.getById(id);

  res.send(product);
};

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await productService.add(name, brand);

  res.send(newProduct);
}

const deleteById = async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
};

const update = async (req, res) => {
  const { name, brand } = req.body;

  const products = await productService.update(req.params.id, name, brand);

  res.send(products);
};

module.exports = {
  getAll,
  getById,
  add,
  deleteById,
  update,
};
