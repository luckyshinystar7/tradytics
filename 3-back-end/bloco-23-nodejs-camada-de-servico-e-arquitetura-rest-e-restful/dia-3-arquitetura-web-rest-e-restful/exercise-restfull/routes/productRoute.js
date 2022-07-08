const { Router } = require('express');
const ProductModel = require('../models/productModel');

productRouter = Router();

productRouter.get('/list-products', async (req, res) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

module.exports = productRouter;
