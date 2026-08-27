import { Router } from 'express';
import { handleFileUpload } from './upload.controller';
import { upload } from '../lib/upload';
import { requireAuth } from '../middleware/auth';

export const adminUploadRouter = Router();
adminUploadRouter.use(requireAuth);
adminUploadRouter.post('/', upload.single('file'), handleFileUpload);
