import { z } from 'zod';

export const createTestimonialSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  role: z.string().min(2, 'Role is required'),
  organization: z.string().min(2, 'Organization is required'),
  avatar: z.string().url('Avatar must be a valid URL or path').optional().nullable(),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  rating: z.coerce.number().min(1).max(5).default(5),
  category: z.string().default('Client'),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  sortOrder: z.coerce.number().default(0),
});

export const updateTestimonialSchema = createTestimonialSchema.partial();

export const testimonialQuerySchema = z.object({
  category: z.string().optional(),
  isFeatured: z
    .string()
    .transform((val) => val === 'true')
    .optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export type CreateTestimonialInput = z.infer<typeof createTestimonialSchema>;
export type UpdateTestimonialInput = z.infer<typeof updateTestimonialSchema>;
export type TestimonialQueryInput = z.infer<typeof testimonialQuerySchema>;
