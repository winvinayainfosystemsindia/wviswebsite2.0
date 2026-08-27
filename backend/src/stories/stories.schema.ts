import { z } from 'zod';

export const createStorySchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/, 'Slug must only contain lowercase alphanumeric characters and hyphens'),
  personName: z.string().min(2, 'Person name is required'),
  personRole: z.string().min(2, 'Person role is required'),
  organization: z.string().optional().nullable(),
  disabilityType: z.string().optional().nullable(),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  content: z.any().optional().nullable(),
  image: z.string().optional().nullable(),
  videoUrl: z.string().optional().nullable(),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  sortOrder: z.coerce.number().default(0),
});

export const updateStorySchema = createStorySchema.partial();

export const storyQuerySchema = z.object({
  search: z.string().optional(),
  isFeatured: z
    .string()
    .transform((val) => val === 'true')
    .optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export type CreateStoryInput = z.infer<typeof createStorySchema>;
export type UpdateStoryInput = z.infer<typeof updateStorySchema>;
export type StoryQueryInput = z.infer<typeof storyQuerySchema>;
