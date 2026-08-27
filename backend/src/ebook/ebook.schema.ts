import { z } from 'zod';

export const createEbookSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  category: z.string().min(2, 'Category is required'),
  author: z.string().min(2, 'Author is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  tileImage: z.string().url('Tile image must be a valid URL or path'),
  pdfUrl: z.string().url('PDF URL must be a valid URL or path'),
  epubUrl: z.string().url('EPUB URL must be a valid URL or path').optional().nullable(),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  sortOrder: z.coerce.number().default(0),
});

export const updateEbookSchema = createEbookSchema.partial();

export const ebookQuerySchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(12),
});

export type CreateEbookInput = z.infer<typeof createEbookSchema>;
export type UpdateEbookInput = z.infer<typeof updateEbookSchema>;
export type EbookQueryInput = z.infer<typeof ebookQuerySchema>;
