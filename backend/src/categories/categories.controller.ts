import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import {
  CreateCategoryInput,
  UpdateCategoryInput,
  CategoryQueryInput,
} from './categories.schema';

export const getCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as CategoryQueryInput;

    const where: { type?: string } = {};
    if (query.type) {
      where.type = query.type;
    }

    const items = await prisma.category.findMany({
      where,
      orderBy: { name: 'asc' },
    });

    res.status(200).json({
      success: true,
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as CreateCategoryInput;

    const existing = await prisma.category.findUnique({
      where: { slug: input.slug },
    });

    if (existing) {
      throw new AppError('A category with this slug already exists', 409);
    }

    const category = await prisma.category.create({
      data: input,
    });

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateCategoryInput;

    const existing = await prisma.category.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('Category not found', 404);
    }

    const updated = await prisma.category.update({
      where: { id },
      data: input,
    });

    res.status(200).json({
      success: true,
      message: 'Category updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.category.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
