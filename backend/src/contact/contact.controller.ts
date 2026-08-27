import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import {
  SubmitContactInquiryInput,
  UpdateContactStatusInput,
  ContactQueryInput,
} from './contact.schema';
import { Prisma } from '@prisma/client';

export const submitInquiry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as SubmitContactInquiryInput;
    const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null;

    const inquiry = await prisma.contactInquiry.create({
      data: {
        ...input,
        ipAddress: typeof ipAddress === 'string' ? ipAddress.split(',')[0].trim() : null,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out. Our team will get back to you shortly.',
      data: {
        id: inquiry.id,
        name: inquiry.name,
        email: inquiry.email,
        createdAt: inquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminInquiries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as ContactQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const where: Prisma.ContactInquiryWhereInput = {};

    if (query.status) {
      where.status = query.status;
    }

    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } },
        { organization: { contains: query.search, mode: 'insensitive' } },
        { reason: { contains: query.search, mode: 'insensitive' } },
        { message: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total, stats] = await Promise.all([
      prisma.contactInquiry.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contactInquiry.count({ where }),
      prisma.contactInquiry.groupBy({
        by: ['status'],
        _count: { id: true },
      }),
    ]);

    const statusCounts = stats.reduce(
      (acc, curr) => {
        acc[curr.status] = curr._count.id;
        return acc;
      },
      {} as Record<string, number>
    );

    res.status(200).json({
      success: true,
      data: items,
      stats: {
        totalAll: Object.values(statusCounts).reduce((a, b) => a + b, 0),
        new: statusCounts.NEW || 0,
        inProgress: statusCounts.IN_PROGRESS || 0,
        resolved: statusCounts.RESOLVED || 0,
        archived: statusCounts.ARCHIVED || 0,
      },
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

export const getAdminInquiryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const item = await prisma.contactInquiry.findUnique({
      where: { id },
    });

    if (!item) {
      throw new AppError('Contact inquiry not found', 404);
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export const updateInquiryStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateContactStatusInput;

    const existing = await prisma.contactInquiry.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('Contact inquiry not found', 404);
    }

    const updated = await prisma.contactInquiry.update({
      where: { id },
      data: input,
    });

    res.status(200).json({
      success: true,
      message: 'Inquiry updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteInquiry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.contactInquiry.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
