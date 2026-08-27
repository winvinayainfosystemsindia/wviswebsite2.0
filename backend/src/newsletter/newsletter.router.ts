import { Router } from 'express';
import {
  getPublicNewsletters,
  getPublicNewsletterById,
  getAdminNewsletters,
  getAdminNewsletterById,
  createNewsletter,
  updateNewsletter,
  deleteNewsletter,
} from './newsletter.controller';
import {
  createNewsletterSchema,
  updateNewsletterSchema,
  newsletterQuerySchema,
} from './newsletter.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';

export const publicNewsletterRouter = Router();
publicNewsletterRouter.get('/', validateQuery(newsletterQuerySchema), getPublicNewsletters);
publicNewsletterRouter.get('/:id', getPublicNewsletterById);

export const adminNewsletterRouter = Router();
adminNewsletterRouter.use(requireAuth);
adminNewsletterRouter.get('/', validateQuery(newsletterQuerySchema), getAdminNewsletters);
adminNewsletterRouter.get('/:id', getAdminNewsletterById);
adminNewsletterRouter.post('/', validateBody(createNewsletterSchema), createNewsletter);
adminNewsletterRouter.patch('/:id', validateBody(updateNewsletterSchema), updateNewsletter);
adminNewsletterRouter.delete('/:id', deleteNewsletter);
