import { Router } from 'express';
import {
  getPublicStories,
  getPublicStoryBySlug,
  getAdminStories,
  getAdminStoryById,
  createStory,
  updateStory,
  deleteStory,
} from './stories.controller';
import {
  createStorySchema,
  updateStorySchema,
  storyQuerySchema,
} from './stories.schema';
import { validateBody, validateQuery } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';

export const publicStoryRouter = Router();
publicStoryRouter.get('/', validateQuery(storyQuerySchema), getPublicStories);
publicStoryRouter.get('/:slug', getPublicStoryBySlug);

export const adminStoryRouter = Router();
adminStoryRouter.use(requireAuth);
adminStoryRouter.get('/', validateQuery(storyQuerySchema), getAdminStories);
adminStoryRouter.get('/:id', getAdminStoryById);
adminStoryRouter.post('/', validateBody(createStorySchema), createStory);
adminStoryRouter.patch('/:id', validateBody(updateStorySchema), updateStory);
adminStoryRouter.delete('/:id', deleteStory);
