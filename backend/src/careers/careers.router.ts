import { Router } from 'express';
import {
  getPublicCareerDomains,
  getAdminCareerDomains,
  getAdminCareerDomainById,
  createCareerDomain,
  updateCareerDomain,
  deleteCareerDomain,
} from './careers.controller';
import {
  createCareerDomainSchema,
  updateCareerDomainSchema,
  careerQuerySchema,
} from './careers.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';

export const publicCareerRouter = Router();
publicCareerRouter.get('/', validateQuery(careerQuerySchema), getPublicCareerDomains);

export const adminCareerRouter = Router();
adminCareerRouter.use(requireAuth);
adminCareerRouter.get('/', validateQuery(careerQuerySchema), getAdminCareerDomains);
adminCareerRouter.get('/:id', getAdminCareerDomainById);
adminCareerRouter.post('/', validateBody(createCareerDomainSchema), createCareerDomain);
adminCareerRouter.patch('/:id', validateBody(updateCareerDomainSchema), updateCareerDomain);
adminCareerRouter.delete('/:id', deleteCareerDomain);
