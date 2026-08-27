import { Router } from 'express';
import {
  getPublicTestimonials,
  getAdminTestimonials,
  getAdminTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from './testimonials.controller';
import {
  createTestimonialSchema,
  updateTestimonialSchema,
  testimonialQuerySchema,
} from './testimonials.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';

export const publicTestimonialRouter = Router();
publicTestimonialRouter.get('/', validateQuery(testimonialQuerySchema), getPublicTestimonials);

export const adminTestimonialRouter = Router();
adminTestimonialRouter.use(requireAuth);
adminTestimonialRouter.get('/', validateQuery(testimonialQuerySchema), getAdminTestimonials);
adminTestimonialRouter.get('/:id', getAdminTestimonialById);
adminTestimonialRouter.post('/', validateBody(createTestimonialSchema), createTestimonial);
adminTestimonialRouter.patch('/:id', validateBody(updateTestimonialSchema), updateTestimonial);
adminTestimonialRouter.delete('/:id', deleteTestimonial);
