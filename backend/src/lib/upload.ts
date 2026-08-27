import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { env } from '../env';

export const uploadBaseDir = path.resolve(process.cwd(), env.UPLOAD_DIR);

// Ensure directories exist recursively
export const ensureDirExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

ensureDirExists(uploadBaseDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Extract target module/folder name (e.g. blogs, newsletters, ebooks, testimonials, stories)
    let folder = ((req.query?.folder as string) || (req.body?.folder as string) || '').toLowerCase().trim();
    folder = folder.replace(/[^a-z0-9_-]/g, '');

    if (!folder) {
      if (file.mimetype.startsWith('image/')) {
        folder = 'blogs';
      } else if (file.mimetype === 'application/pdf') {
        folder = 'newsletters';
      } else {
        folder = 'documents';
      }
    }

    // Year (YYYY) and Month (MMM) e.g., 2026 and Aug
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = now.toLocaleString('en-US', { month: 'short' }); // e.g. "Jan", "Feb", "Mar", "Aug", etc.

    const targetDir = path.join(uploadBaseDir, folder, year, month);
    ensureDirExists(targetDir);
    cb(null, targetDir);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname).toLowerCase();
    const baseName = path
      .basename(file.originalname, ext)
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .slice(0, 50);
    cb(null, `${baseName}-${uniqueSuffix}${ext}`);
  },
});

const allowedMimeTypes = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/svg+xml',
  'image/gif',
  'application/pdf',
  'application/epub+zip',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

export const upload = multer({
  storage,
  limits: {
    fileSize: env.MAX_FILE_SIZE_MB * 1024 * 1024,
  },
  fileFilter: (_req, file, cb) => {
    if (allowedMimeTypes.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`File type ${file.mimetype} is not allowed`));
    }
  },
});
