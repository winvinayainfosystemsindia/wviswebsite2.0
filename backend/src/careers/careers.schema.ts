import { z } from 'zod';

export const createCareerDomainSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  department: z.string().default('Engineering'),
  type: z.string().default('Internship'),
  location: z.string().default('Bengaluru / Remote'),
  skills: z.array(z.string()).min(1, 'At least one skill is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  responsibilities: z.array(z.string()).default([]),
  requirements: z.array(z.string()).default([]),
  isPublished: z.boolean().default(true),
  sortOrder: z.coerce.number().default(0),
});

export const updateCareerDomainSchema = createCareerDomainSchema.partial();

export const careerQuerySchema = z.object({
  type: z.string().optional(),
  department: z.string().optional(),
  search: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export type CreateCareerDomainInput = z.infer<typeof createCareerDomainSchema>;
export type UpdateCareerDomainInput = z.infer<typeof updateCareerDomainSchema>;
export type CareerQueryInput = z.infer<typeof careerQuerySchema>;
