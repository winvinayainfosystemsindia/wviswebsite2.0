import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import {
  CreateNewsletterInput,
  UpdateNewsletterInput,
  NewsletterQueryInput,
} from './newsletter.schema';
import { Prisma } from '@prisma/client';

export const getPublicNewsletters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as NewsletterQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 12;
    const skip = (page - 1) * limit;

    const where: Prisma.NewsletterWhereInput = {
      isPublished: true,
    };

    if (query.year && query.year !== 'all') {
      where.year = query.year;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { excerpt: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.newsletter.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.newsletter.count({ where }),
    ]);

    res.status(200).json({
      success: true,
      data: items,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getPublicNewsletterById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const newsletter = await prisma.newsletter.findFirst({
      where: {
        id,
        isPublished: true,
      },
    });

    if (!newsletter) {
      throw new AppError('Newsletter not found', 404);
    }

    res.status(200).json({
      success: true,
      data: newsletter,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminNewsletters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as NewsletterQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const where: Prisma.NewsletterWhereInput = {};

    if (query.year && query.year !== 'all') {
      where.year = query.year;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { excerpt: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.newsletter.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.newsletter.count({ where }),
    ]);

    res.status(200).json({
      success: true,
      data: items,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminNewsletterById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const newsletter = await prisma.newsletter.findUnique({
      where: { id },
    });

    if (!newsletter) {
      throw new AppError('Newsletter not found', 404);
    }

    res.status(200).json({
      success: true,
      data: newsletter,
    });
  } catch (error) {
    next(error);
  }
};

export const createNewsletter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as CreateNewsletterInput;

    const newsletter = await prisma.newsletter.create({
      data: input,
    });

    res.status(201).json({
      success: true,
      message: 'Newsletter created successfully',
      data: newsletter,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNewsletter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateNewsletterInput;

    const existing = await prisma.newsletter.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('Newsletter not found', 404);
    }

    const updated = await prisma.newsletter.update({
      where: { id },
      data: input,
    });

    res.status(200).json({
      success: true,
      message: 'Newsletter updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNewsletter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.newsletter.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Newsletter deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
