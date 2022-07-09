const { Router } = require('express');
const ProductModel = require('../models/productModel');
const ProductController = require('../controllers/productController');

productRouter = Router();

productRouter.get('/list-products', ProductController.getAll);

productRouter.post('/add-product', ProductController.getAll);

productRouter.post('/delete-product/:id', ProductController.deleteById);

module.exports = productRouter;
