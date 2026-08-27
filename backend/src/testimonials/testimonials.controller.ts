import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import {
  CreateTestimonialInput,
  UpdateTestimonialInput,
  TestimonialQueryInput,
} from './testimonials.schema';
import { Prisma } from '@prisma/client';

export const getPublicTestimonials = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as TestimonialQueryInput;

    const where: Prisma.TestimonialWhereInput = {
      isPublished: true,
    };

    if (query.category && query.category !== 'all') {
      where.category = query.category;
    }

    if (query.isFeatured !== undefined) {
      where.isFeatured = query.isFeatured;
    }

    const items = await prisma.testimonial.findMany({
      where,
      orderBy: [{ isFeatured: 'desc' }, { sortOrder: 'asc' }, { createdAt: 'desc' }],
    });

    res.status(200).json({
      success: true,
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminTestimonials = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as TestimonialQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const where: Prisma.TestimonialWhereInput = {};

    if (query.category && query.category !== 'all') {
      where.category = query.category;
    }

    const [items, total] = await Promise.all([
      prisma.testimonial.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.testimonial.count({ where }),
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

export const getAdminTestimonialById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const item = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!item) {
      throw new AppError('Testimonial not found', 404);
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export const createTestimonial = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as CreateTestimonialInput;

    const item = await prisma.testimonial.create({
      data: input,
    });

    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTestimonial = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateTestimonialInput;

    const existing = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('Testimonial not found', 404);
    }

    const updated = await prisma.testimonial.update({
      where: { id },
      data: input,
    });

    res.status(200).json({
      success: true,
      message: 'Testimonial updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.testimonial.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
