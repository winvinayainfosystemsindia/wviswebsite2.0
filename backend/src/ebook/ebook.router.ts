import { Router } from 'express';
import {
  getPublicEbooks,
  getPublicEbookById,
  getAdminEbooks,
  getAdminEbookById,
  createEbook,
  updateEbook,
  deleteEbook,
} from './ebook.controller';
import {
  createEbookSchema,
  updateEbookSchema,
  ebookQuerySchema,
} from './ebook.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';

export const publicEbookRouter = Router();
publicEbookRouter.get('/', validateQuery(ebookQuerySchema), getPublicEbooks);
publicEbookRouter.get('/:id', getPublicEbookById);

export const adminEbookRouter = Router();
adminEbookRouter.use(requireAuth);
adminEbookRouter.get('/', validateQuery(ebookQuerySchema), getAdminEbooks);
adminEbookRouter.get('/:id', getAdminEbookById);
adminEbookRouter.post('/', validateBody(createEbookSchema), createEbook);
adminEbookRouter.patch('/:id', validateBody(updateEbookSchema), updateEbook);
adminEbookRouter.delete('/:id', deleteEbook);
