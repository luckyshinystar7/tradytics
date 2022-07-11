const { Router } = require('express');
const ProductController = require('../controllers/productController');

productRouter = Router();

productRouter.get('/list', ProductController.getAll);

productRouter.get('/:id', ProductController.getById);

productRouter.post('/', ProductController.add);

productRouter.delete('/:id', ProductController.deleteById);

productRouter.put('/:id', ProductController.update);

module.exports = productRouter;
