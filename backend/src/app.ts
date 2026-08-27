import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { env } from './env';
import { globalLimiter } from './middleware/rateLimiter';
import { xssSanitizer } from './middleware/sanitizer';
import { notFoundHandler, globalErrorHandler } from './middleware/errorHandler';

// Routers
import authRouter from './auth/auth.router';
import { publicBlogRouter, adminBlogRouter } from './blog/blog.router';
import { publicNewsletterRouter, adminNewsletterRouter } from './newsletter/newsletter.router';
import { publicEbookRouter, adminEbookRouter } from './ebook/ebook.router';
import { publicCareerRouter, adminCareerRouter } from './careers/careers.router';
import { publicContactRouter, adminContactRouter } from './contact/contact.router';
import { publicTestimonialRouter, adminTestimonialRouter } from './testimonials/testimonials.router';
import { publicStoryRouter, adminStoryRouter } from './stories/stories.router';
import { publicCategoryRouter, adminCategoryRouter } from './categories/categories.router';
import { adminUploadRouter } from './upload/upload.router';

export const createApp = () => {
  const app = express();

  // Security Headers
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      crossOriginEmbedderPolicy: false,
    })
  );

  // CORS Configuration
  const allowedOrigins = env.CORS_ORIGIN.split(',').map((origin) => origin.trim());
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
          callback(null, true);
        } else {
          callback(new Error(`Origin ${origin} not allowed by CORS`));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // Logging
  if (env.NODE_ENV !== 'test') {
    app.use(morgan(env.NODE_ENV === 'development' ? 'dev' : 'combined'));
  }

  // Request Body Parsing
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // XSS Sanitization for Request Body
  app.use(xssSanitizer);

  // Static Uploads Serving
  const uploadPath = path.resolve(process.cwd(), env.UPLOAD_DIR);
  app.use('/uploads', express.static(uploadPath));

  // Health Check Endpoint
  app.get('/api/health', (_req, res) => {
    res.status(200).json({
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: 'WinVinaya Infosystems Backend API',
      version: '1.0.0',
      environment: env.NODE_ENV,
    });
  });

  // Apply General Rate Limiter to API Endpoints
  app.use('/api', globalLimiter);

  // Public Endpoints
  app.use('/api/auth', authRouter);
  app.use('/api/blog', publicBlogRouter);
  app.use('/api/blogs', publicBlogRouter);
  app.use('/api/newsletter', publicNewsletterRouter);
  app.use('/api/newsletters', publicNewsletterRouter);
  app.use('/api/ebook', publicEbookRouter);
  app.use('/api/ebooks', publicEbookRouter);
  app.use('/api/careers', publicCareerRouter);
  app.use('/api/contact', publicContactRouter);
  app.use('/api/testimonials', publicTestimonialRouter);
  app.use('/api/stories', publicStoryRouter);
  app.use('/api/categories', publicCategoryRouter);

  // Admin Endpoints (Protected by Auth inside their respective routers)
  app.use('/api/admin/blog', adminBlogRouter);
  app.use('/api/admin/blogs', adminBlogRouter);
  app.use('/api/admin/newsletter', adminNewsletterRouter);
  app.use('/api/admin/newsletters', adminNewsletterRouter);
  app.use('/api/admin/ebook', adminEbookRouter);
  app.use('/api/admin/ebooks', adminEbookRouter);
  app.use('/api/admin/careers', adminCareerRouter);
  app.use('/api/admin/contact', adminContactRouter);
  app.use('/api/admin/testimonials', adminTestimonialRouter);
  app.use('/api/admin/stories', adminStoryRouter);
  app.use('/api/admin/categories', adminCategoryRouter);
  app.use('/api/admin/upload', adminUploadRouter);

  // 404 Handler
  app.use(notFoundHandler);

  // Global Error Handler
  app.use(globalErrorHandler);

  return app;
};

export const app = createApp();
