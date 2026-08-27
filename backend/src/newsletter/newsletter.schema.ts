import { z } from 'zod';

export const createNewsletterSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  publishedDate: z.string().min(2, 'Published date is required'),
  year: z.string().min(4, 'Year is required (e.g. 2026)'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
  coverImage: z.string().min(1, 'Cover image is required'),
  pdfUrl: z.string().min(1, 'PDF document is required'),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  sortOrder: z.coerce.number().default(0),
});

export const updateNewsletterSchema = createNewsletterSchema.partial();

export const newsletterQuerySchema = z.object({
  year: z.string().optional(),
  search: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(12),
});

export type CreateNewsletterInput = z.infer<typeof createNewsletterSchema>;
export type UpdateNewsletterInput = z.infer<typeof updateNewsletterSchema>;
export type NewsletterQueryInput = z.infer<typeof newsletterQuerySchema>;
