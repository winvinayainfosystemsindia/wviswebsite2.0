import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app';

describe('Backend Core API & Security Suite', () => {
  describe('Health & Security Headers', () => {
    it('GET /api/health returns 200 OK and healthy status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status', 'healthy');
      expect(res.body).toHaveProperty('service', 'WinVinaya Infosystems Backend API');
      expect(res.body).toHaveProperty('version', '1.0.0');
    });

    it('Enforces security headers from Helmet', async () => {
      const res = await request(app).get('/api/health');
      expect(res.headers).toHaveProperty('x-content-type-options', 'nosniff');
      expect(res.headers).toHaveProperty('x-frame-options', 'SAMEORIGIN');
    });

    it('GET /api/non-existent-route returns 404 Not Found', async () => {
      const res = await request(app).get('/api/non-existent-route-12345');
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body.message).toContain('Route not found');
    });
  });

  describe('Contact Inquiry API Validation', () => {
    it('POST /api/contact fails with 400 when required fields are missing', async () => {
      const res = await request(app).post('/api/contact').send({
        name: '',
        email: 'invalid-email',
      });
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body.message).toBe('Validation failed');
      expect(Array.isArray(res.body.errors)).toBe(true);
    });

    it('POST /api/contact validates minimum message length', async () => {
      const res = await request(app).post('/api/contact').send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        reason: 'accessibility-audit',
        message: 'Hi', // Less than 10 characters
      });
      expect(res.status).toBe(400);
      expect(res.body.errors.some((e: { field: string }) => e.field === 'message')).toBe(true);
    });
  });

  describe('Authentication API Validation', () => {
    it('POST /api/auth/login rejects empty payload', async () => {
      const res = await request(app).post('/api/auth/login').send({});
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('success', false);
    });

    it('POST /api/auth/login rejects invalid credentials format', async () => {
      const res = await request(app).post('/api/auth/login').send({
        email: 'not-an-email',
        password: '123',
      });
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('success', false);
    });

    it('GET /api/auth/me rejects unauthorized request without Bearer token', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.status).toBe(401);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body.message).toContain('Authentication required');
    });
  });

  describe('Admin Protected Routes Guards', () => {
    it('GET /api/admin/blog rejects unauthenticated access', async () => {
      const res = await request(app).get('/api/admin/blog');
      expect(res.status).toBe(401);
    });

    it('GET /api/admin/newsletter rejects unauthenticated access', async () => {
      const res = await request(app).get('/api/admin/newsletter');
      expect(res.status).toBe(401);
    });

    it('GET /api/admin/contact rejects unauthenticated access', async () => {
      const res = await request(app).get('/api/admin/contact');
      expect(res.status).toBe(401);
    });
  });
});
