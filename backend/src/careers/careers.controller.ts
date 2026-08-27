import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import {
  CreateCareerDomainInput,
  UpdateCareerDomainInput,
  CareerQueryInput,
} from './careers.schema';
import { Prisma } from '@prisma/client';

export const getPublicCareerDomains = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as CareerQueryInput;

    const where: Prisma.CareerDomainWhereInput = {
      isPublished: true,
    };

    if (query.type) {
      where.type = query.type;
    }

    if (query.department) {
      where.department = query.department;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const items = await prisma.careerDomain.findMany({
      where,
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });

    res.status(200).json({
      success: true,
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminCareerDomains = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as CareerQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const where: Prisma.CareerDomainWhereInput = {};

    if (query.type) {
      where.type = query.type;
    }

    if (query.department) {
      where.department = query.department;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.careerDomain.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.careerDomain.count({ where }),
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

export const getAdminCareerDomainById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const item = await prisma.careerDomain.findUnique({
      where: { id },
    });

    if (!item) {
      throw new AppError('Career / Internship domain not found', 404);
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export const createCareerDomain = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as CreateCareerDomainInput;

    const item = await prisma.careerDomain.create({
      data: input,
    });

    res.status(201).json({
      success: true,
      message: 'Career domain created successfully',
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCareerDomain = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateCareerDomainInput;

    const existing = await prisma.careerDomain.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('Career domain not found', 404);
    }

    const updated = await prisma.careerDomain.update({
      where: { id },
      data: input,
    });

    res.status(200).json({
      success: true,
      message: 'Career domain updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCareerDomain = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.careerDomain.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Career domain deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
