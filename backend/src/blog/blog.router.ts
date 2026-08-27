import { Router } from 'express';
import {
  getPublicBlogs,
  getPublicBlogBySlug,
  getAdminBlogs,
  getAdminBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from './blog.controller';
import {
  createBlogSchema,
  updateBlogSchema,
  blogQuerySchema,
} from './blog.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';

export const publicBlogRouter = Router();
publicBlogRouter.get('/', validateQuery(blogQuerySchema), getPublicBlogs);
publicBlogRouter.get('/:slug', getPublicBlogBySlug);

export const adminBlogRouter = Router();
adminBlogRouter.use(requireAuth);
adminBlogRouter.get('/', validateQuery(blogQuerySchema), getAdminBlogs);
adminBlogRouter.get('/:id', getAdminBlogById);
adminBlogRouter.post('/', validateBody(createBlogSchema), createBlog);
adminBlogRouter.patch('/:id', validateBody(updateBlogSchema), updateBlog);
adminBlogRouter.delete('/:id', deleteBlog);
