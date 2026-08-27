import { Request, Response, NextFunction } from 'express';
import sanitizeHtml from 'sanitize-html';

const sanitizeValue = (value: unknown): unknown => {
  if (typeof value === 'string') {
    return sanitizeHtml(value, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();
  }
  if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  }
  if (value !== null && typeof value === 'object') {
    const sanitizedObj: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      // Don't strip HTML from rich blog section content if explicitly marked
      if (key === 'richHtml' || key === 'htmlContent') {
        sanitizedObj[key] = typeof val === 'string' ? sanitizeHtml(val) : val;
      } else {
        sanitizedObj[key] = sanitizeValue(val);
      }
    }
    return sanitizedObj;
  }
  return value;
};

export const xssSanitizer = (req: Request, _res: Response, next: NextFunction) => {
  if (req.body && typeof req.body === 'object') {
    req.body = sanitizeValue(req.body);
  }
  next();
};
