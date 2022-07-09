const { Router } = require('express');
const ProductModel = require('../models/productModel');
const ProductController = require('../controllers/productController');

productRouter = Router();

productRouter.get('/list-products', ProductController.getAll);

module.exports = productRouter;
