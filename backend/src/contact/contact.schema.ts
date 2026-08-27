import { z } from 'zod';

export const submitContactInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email address is required'),
  phone: z.string().optional().nullable(),
  organization: z.string().optional().nullable(),
  reason: z.string().min(2, 'Please select a reason for contact'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const updateContactStatusSchema = z.object({
  status: z.enum(['NEW', 'IN_PROGRESS', 'RESOLVED', 'ARCHIVED']).optional(),
  notes: z.string().optional().nullable(),
});

export const contactQuerySchema = z.object({
  status: z.enum(['NEW', 'IN_PROGRESS', 'RESOLVED', 'ARCHIVED']).optional(),
  search: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export type SubmitContactInquiryInput = z.infer<typeof submitContactInquirySchema>;
export type UpdateContactStatusInput = z.infer<typeof updateContactStatusSchema>;
export type ContactQueryInput = z.infer<typeof contactQuerySchema>;
