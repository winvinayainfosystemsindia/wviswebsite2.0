import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import {
  CreateStoryInput,
  UpdateStoryInput,
  StoryQueryInput,
} from './stories.schema';
import { Prisma } from '@prisma/client';

export const getPublicStories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as StoryQueryInput;

    const where: Prisma.StoryWhereInput = {
      isPublished: true,
    };

    if (query.isFeatured !== undefined) {
      where.isFeatured = query.isFeatured;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { personName: { contains: query.search, mode: 'insensitive' } },
        { summary: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const items = await prisma.story.findMany({
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

export const getPublicStoryBySlug = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const slug = String(req.params.slug);

    const story = await prisma.story.findFirst({
      where: {
        slug,
        isPublished: true,
      },
    });

    if (!story) {
      throw new AppError('Success story not found', 404);
    }

    res.status(200).json({
      success: true,
      data: story,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminStories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as StoryQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const where: Prisma.StoryWhereInput = {};

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { personName: { contains: query.search, mode: 'insensitive' } },
        { summary: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.story.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.story.count({ where }),
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

export const getAdminStoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const story = await prisma.story.findUnique({
      where: { id },
    });

    if (!story) {
      throw new AppError('Success story not found', 404);
    }

    res.status(200).json({
      success: true,
      data: story,
    });
  } catch (error) {
    next(error);
  }
};

export const createStory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as CreateStoryInput;

    const existing = await prisma.story.findUnique({
      where: { slug: input.slug },
    });

    if (existing) {
      throw new AppError('A story with this URL slug already exists', 409);
    }

    const story = await prisma.story.create({
      data: {
        ...input,
        content: input.content !== undefined ? (input.content as unknown as Prisma.InputJsonValue) : undefined,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Success story created successfully',
      data: story,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateStoryInput;

    const existing = await prisma.story.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('Success story not found', 404);
    }

    if (input.slug && input.slug !== existing.slug) {
      const duplicate = await prisma.story.findUnique({
        where: { slug: input.slug },
      });
      if (duplicate) {
        throw new AppError('A story with this URL slug already exists', 409);
      }
    }

    const updated = await prisma.story.update({
      where: { id },
      data: {
        ...input,
        content: input.content !== undefined ? (input.content as unknown as Prisma.InputJsonValue) : undefined,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Success story updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteStory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.story.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Success story deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
