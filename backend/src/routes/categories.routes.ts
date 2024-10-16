import express from 'express'
import { CategoriesController } from '../controllers/categories.controller';

export const router = express.Router()

router.post('/create', CategoriesController.createCategory);
router.get('/', CategoriesController.getAllCategories);
router.get('/:id', CategoriesController.getCategoryById);
router.put('/:id', CategoriesController.updateCategory);
router.delete('/:id', CategoriesController.deleteCategory);