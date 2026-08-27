import { Router } from 'express';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from './categories.controller';
import {
  createCategorySchema,
  updateCategorySchema,
  categoryQuerySchema,
} from './categories.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';

export const publicCategoryRouter = Router();
publicCategoryRouter.get('/', validateQuery(categoryQuerySchema), getCategories);

export const adminCategoryRouter = Router();
adminCategoryRouter.use(requireAuth);
adminCategoryRouter.get('/', validateQuery(categoryQuerySchema), getCategories);
adminCategoryRouter.post('/', validateBody(createCategorySchema), createCategory);
adminCategoryRouter.patch('/:id', validateBody(updateCategorySchema), updateCategory);
adminCategoryRouter.delete('/:id', deleteCategory);
