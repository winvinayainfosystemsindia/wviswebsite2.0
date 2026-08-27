import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../middleware/errorHandler';
import { CreateBlogInput, UpdateBlogInput, BlogQueryInput } from './blog.schema';
import { Prisma } from '@prisma/client';

export const getPublicBlogs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as BlogQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 50;
    const skip = (page - 1) * limit;

    const where: Prisma.BlogPostWhereInput = {
      isPublished: true,
    };

    if (query.category && query.category !== 'all') {
      where.category = query.category;
    }

    if (query.tag) {
      where.tags = { has: query.tag };
    }

    if (query.isFeatured !== undefined) {
      where.isFeatured = query.isFeatured;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { excerpt: { contains: query.search, mode: 'insensitive' } },
        { author: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
      }),
      prisma.blogPost.count({ where }),
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

export const getPublicBlogBySlug = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const slug = String(req.params.slug);

    // Search by exact slug or within aliases array
    const post = await prisma.blogPost.findFirst({
      where: {
        isPublished: true,
        OR: [
          { slug: { equals: slug } },
          { aliases: { has: slug } },
        ],
      },
    });

    if (!post) {
      throw new AppError('Blog article not found', 404);
    }

    // Increment view count asynchronously
    prisma.blogPost
      .update({
        where: { id: post.id },
        data: { views: { increment: 1 } },
      })
      .catch(() => {});

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminBlogs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query as unknown as BlogQueryInput;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const where: Prisma.BlogPostWhereInput = {};

    if (query.category && query.category !== 'all') {
      where.category = query.category;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { excerpt: { contains: query.search, mode: 'insensitive' } },
        { author: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          authorUser: {
            select: { id: true, name: true, email: true },
          },
        },
      }),
      prisma.blogPost.count({ where }),
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

export const getAdminBlogById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        authorUser: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    if (!post) {
      throw new AppError('Blog article not found', 404);
    }

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const input = req.body as CreateBlogInput;

    const existingSlug = await prisma.blogPost.findUnique({
      where: { slug: input.slug },
    });

    if (existingSlug) {
      throw new AppError('A blog article with this URL slug already exists', 409);
    }

    const post = await prisma.blogPost.create({
      data: {
        ...input,
        sections: input.sections as unknown as Prisma.InputJsonValue,
        authorUserId: req.user?.id,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);
    const input = req.body as UpdateBlogInput;

    const existing = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new AppError('Blog article not found', 404);
    }

    if (input.slug && input.slug !== existing.slug) {
      const duplicateSlug = await prisma.blogPost.findUnique({
        where: { slug: input.slug },
      });
      if (duplicateSlug) {
        throw new AppError('A blog article with this URL slug already exists', 409);
      }
    }

    const updated = await prisma.blogPost.update({
      where: { id },
      data: {
        ...input,
        sections: input.sections !== undefined ? (input.sections as unknown as Prisma.InputJsonValue) : undefined,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Blog post updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = String(req.params.id);

    await prisma.blogPost.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
