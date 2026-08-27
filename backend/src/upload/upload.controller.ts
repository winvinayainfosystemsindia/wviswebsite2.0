import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { AppError } from '../middleware/errorHandler';
import { uploadBaseDir } from '../lib/upload';

export const handleFileUpload = (req: Request, res: Response, next: NextFunction): void => {
  try {
    if (!req.file) {
      throw new AppError('No file was uploaded', 400);
    }

    // Compute relative URL starting with /uploads/
    const relativeToUploads = path.relative(uploadBaseDir, req.file.path).replace(/\\/g, '/');
    const relativeUrl = `/uploads/${relativeToUploads}`;

    res.status(201).json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        originalName: req.file.originalname,
        filename: req.file.filename,
        mimetype: req.file.mimetype,
        size: req.file.size,
        url: relativeUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};
