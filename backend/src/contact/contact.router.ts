import { Router } from 'express';
import {
  submitInquiry,
  getAdminInquiries,
  getAdminInquiryById,
  updateInquiryStatus,
  deleteInquiry,
} from './contact.controller';
import {
  submitContactInquirySchema,
  updateContactStatusSchema,
  contactQuerySchema,
} from './contact.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';
import { formLimiter } from '../middleware/rateLimiter';

export const publicContactRouter = Router();
publicContactRouter.post('/', formLimiter, validateBody(submitContactInquirySchema), submitInquiry);

export const adminContactRouter = Router();
adminContactRouter.use(requireAuth);
adminContactRouter.get('/', validateQuery(contactQuerySchema), getAdminInquiries);
adminContactRouter.get('/:id', getAdminInquiryById);
adminContactRouter.patch('/:id', validateBody(updateContactStatusSchema), updateInquiryStatus);
adminContactRouter.delete('/:id', deleteInquiry);
