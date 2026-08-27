import { z } from 'zod';

const blogContentSectionSchema = z.object({
  heading: z.string().optional(),
  paragraphs: z.array(z.string()).min(1, 'At least one paragraph is required'),
  quoteCallout: z
    .object({
      text: z.string(),
      author: z.string().optional(),
    })
    .optional(),
  takeaways: z.array(z.string()).optional(),
});

export const createBlogSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/, 'Slug must only contain lowercase alphanumeric characters and hyphens'),
  aliases: z.array(z.string()).default([]),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
  category: z.string().min(2, 'Category is required'),
  categoryLabel: z.string().min(2, 'Category label is required'),
  author: z.string().min(2, 'Author name is required'),
  authorRole: z.string().min(2, 'Author role is required'),
  publishedDate: z.string().min(2, 'Published date is required'),
  readTime: z.string().default('5 min read'),
  tileImage: z.string().min(1, 'Tile image is required'),
  bannerImage: z.string().min(1, 'Banner image is required'),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  tags: z.array(z.string()).default([]),
  highlightBadge: z.string().optional().nullable(),
  coverCaption: z.string().optional().nullable(),
  sections: z.array(blogContentSectionSchema).min(1, 'At least one section is required'),
});

export const updateBlogSchema = createBlogSchema.partial();

export const blogQuerySchema = z.object({
  category: z.string().optional(),
  tag: z.string().optional(),
  search: z.string().optional(),
  isFeatured: z
    .string()
    .transform((val) => val === 'true')
    .optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
});

export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
export type BlogQueryInput = z.infer<typeof blogQuerySchema>;
