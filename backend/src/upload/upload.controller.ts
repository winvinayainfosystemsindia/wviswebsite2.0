import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { AppError } from '../middleware/errorHandler';

export const handleFileUpload = (req: Request, res: Response, next: NextFunction): void => {
  try {
    if (!req.file) {
      throw new AppError('No file was uploaded', 400);
    }

    // Generate public accessible URL path
    let subFolder = 'documents';
    if (req.file.mimetype.startsWith('image/')) {
      subFolder = 'images';
    } else if (req.file.mimetype === 'application/pdf') {
      subFolder = 'newsletters';
    }

    const relativeUrl = `/uploads/${subFolder}/${path.basename(req.file.path)}`;

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
