import { Router } from 'express';
import { login, getMe, changePassword, registerInitialAdmin } from './auth.controller';
import { loginSchema, changePasswordSchema, initialAdminSchema } from './auth.schema';
import { validateBody } from '../middleware/validate';
import { requireAuth } from '../middleware/auth';
import { authLimiter } from '../middleware/rateLimiter';

const router = Router();

// Public auth endpoints with rate limiting
router.post('/login', authLimiter, validateBody(loginSchema), login);
router.post('/setup-initial-admin', authLimiter, validateBody(initialAdminSchema), registerInitialAdmin);

// Protected auth endpoints
router.get('/me', requireAuth, getMe);
router.post('/change-password', requireAuth, validateBody(changePasswordSchema), changePassword);

export default router;
