import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import {
  CreateEbookInput,
  UpdateEbookInput,
  EbookQueryInput,
} from './ebook.schema';
import { Prisma } from '@prisma/client';

export const getPublicEbooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as EbookQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 12;
    const skip = (page - 1) * limit;

    const where: Prisma.EbookWhereInput = {
      isPublished: true,
    };

    if (query.category && query.category !== 'all') {
      where.category = { contains: query.category, mode: 'insensitive' };
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
        { author: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.ebook.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ isFeatured: 'desc' }, { sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.ebook.count({ where }),
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

export const getPublicEbookById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const ebook = await prisma.ebook.findFirst({
      where: {
        id,
        isPublished: true,
      },
    });

    if (!ebook) {
      throw new AppError('eBook not found', 404);
    }

    res.status(200).json({
      success: true,
      data: ebook,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminEbooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as EbookQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const where: Prisma.EbookWhereInput = {};

    if (query.category && query.category !== 'all') {
      where.category = { contains: query.category, mode: 'insensitive' };
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
        { author: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.ebook.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.ebook.count({ where }),
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

export const getAdminEbookById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const ebook = await prisma.ebook.findUnique({
      where: { id },
    });

    if (!ebook) {
      throw new AppError('eBook not found', 404);
    }

    res.status(200).json({
      success: true,
      data: ebook,
    });
  } catch (error) {
    next(error);
  }
};

export const createEbook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as CreateEbookInput;

    const ebook = await prisma.ebook.create({
      data: input,
    });

    res.status(201).json({
      success: true,
      message: 'eBook created successfully',
      data: ebook,
    });
  } catch (error) {
    next(error);
  }
};

export const updateEbook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateEbookInput;

    const existing = await prisma.ebook.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('eBook not found', 404);
    }

    const updated = await prisma.ebook.update({
      where: { id },
      data: input,
    });

    res.status(200).json({
      success: true,
      message: 'eBook updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEbook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.ebook.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'eBook deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
