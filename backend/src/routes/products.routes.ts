import express from 'express'
import { ProductsController } from '../controllers/products.controller';

export const router = express.Router()

router.post('/create', ProductsController.createProduct);
router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getProductById);
router.put('/:id', ProductsController.updateProduct);
router.delete('/:id', ProductsController.deleteProduct);
router.get('/category/:categoryName', ProductsController.getProductsByCategory);