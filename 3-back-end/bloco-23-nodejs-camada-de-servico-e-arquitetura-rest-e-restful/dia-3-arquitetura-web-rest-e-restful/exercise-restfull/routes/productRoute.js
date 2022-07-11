const { Router } = require('express');
const ProductController = require('../controllers/productController');

productRouter = Router();

productRouter.get('/list', ProductController.getAll);

productRouter.get('/:id', ProductController.getById);

productRouter.post('/add', ProductController.add);

productRouter.delete('/delete/:id', ProductController.deleteById);

productRouter.put('/update/:id', ProductController.update);

module.exports = productRouter;
