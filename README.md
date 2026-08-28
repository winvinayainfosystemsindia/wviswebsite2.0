# 🌐 WinVinaya Infosystems (`wviswebsite2.0`)

> Official web platform for **WinVinaya Infosystems** — empowering persons with disabilities and women through inclusive IT solutions, digital accessibility services, and specialized skill training.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![AWS EC2](https://img.shields.io/badge/AWS-EC2%20Deployment-orange.svg)](./doc/aws-ec2-initial-deployment.md)
[![Node.js](https://img.shields.io/badge/Node.js-v20%2B%20%7C%20v22%2B-green.svg)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-6-indigo.svg)](https://www.prisma.io)
[![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-brightgreen.svg)](https://nginx.org)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Repository Structure](#-repository-structure)
- [Technology Stack](#-technology-stack)
- [Quick Start (Local Development)](#-quick-start-local-development)
  - [Prerequisites](#prerequisites)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Frontend Setup](#2-frontend-setup)
- [AWS EC2 Deployment Guide](#-aws-ec2-deployment-guide)
- [Security & Environment Hygiene](#-security--environment-hygiene)
- [Available Scripts](#-available-scripts)
- [License](#-license)

---

## 🌟 Overview

The `wviswebsite2.0` repository is a decoupled, modern web application comprising:
1. **Frontend SPA**: Fast, accessible Single Page Application built with React 19, TypeScript, Vite 8, Material UI, and TanStack Router.
2. **Backend API**: Enterprise REST API built with Express 5, TypeScript, Prisma ORM 6, PostgreSQL, Zod validation, and JWT-based authentication.
3. **Nginx Reverse Proxy**: Production routing, SSL termination (Let's Encrypt), static asset caching, and security header enforcement.
4. **AWS EC2 Production Deployment Guide**: Comprehensive step-by-step master guide for deploying both Frontend and Backend on AWS EC2 in [`doc/aws-ec2-initial-deployment.md`](./doc/aws-ec2-initial-deployment.md).

---

## 📁 Repository Structure

```
wviswebsite2.0/
├── backend/                  # Express 5 + TypeScript + Prisma API Service
│   ├── prisma/               # Database schema & initial seeding scripts
│   ├── src/                  # Controllers, routes, services & middlewares
│   ├── uploads/              # Local disk storage for media, PDFs & eBooks
│   ├── .env.example          # Environment variables template
│   └── package.json          # Backend dependencies & npm scripts
│
├── frontend/                 # React 19 + TypeScript + Vite 8 SPA
│   ├── public/               # Static assets, logos, icons
│   ├── scripts/              # Automated SEO sitemap & robots generator
│   ├── src/                  # Pages, components, sections & Redux store
│   ├── .env.example          # Frontend environment variables template
│   └── package.json          # Frontend dependencies & npm scripts
│
├── nginx/                    # Production Nginx Server Configurations
│   ├── wvis.conf             # Full HTTPS/SSL production reverse proxy config
│   ├── wvis-http-only.conf   # Initial HTTP starter config (for Certbot SSL setup)
│   └── README.md             # Nginx-specific configuration guide
│
├── doc/                      # Central Project Documentation & Runbooks
│   ├── README.md             # Documentation hub & architecture map
│   ├── aws-ec2-initial-deployment.md # Master step-by-step AWS EC2 deployment guide
│   ├── backend-deployment.md # Backend deployment & PM2 process guide
│   ├── frontend-deployment.md# Frontend build, SEO & caching guide
│   └── troubleshooting-and-maintenance.md # Updates, backups & error runbooks
│
├── .gitignore                # Comprehensive gitignore (ignores PEM keys, env secrets, dist)
├── LICENSE                   # MIT License
└── README.md                 # Project root overview & quickstart
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, TypeScript 5.8, Vite 8, TanStack Router, Material UI (MUI), Emotion, Redux Toolkit |
| **Backend** | Node.js 20+/22+, Express 5, TypeScript 5.8, Prisma ORM 6, PostgreSQL, Zod, Helmet, Morgan |
| **Security & Auth** | JWT (`jsonwebtoken`), `bcryptjs`, XSS Sanitization, Rate Limiting, CORS whitelist |
| **Storage & Files** | `multer` for local file uploads (PDFs, eBooks, images, brochures) |
| **Hosting & Cloud** | AWS EC2 (Ubuntu 22.04/24.04), Elastic IP, Nginx Reverse Proxy, Let's Encrypt SSL, PM2 |

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) v20.x or v22.x LTS
- [PostgreSQL](https://www.postgresql.org/) database running locally or in Docker
- Git

### 1. Backend Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env to set your local DATABASE_URL and JWT_SECRET

# 4. Generate Prisma client & push database schema
npm run prisma:generate
npm run prisma:push

# 5. Seed default admin credentials & categories
npm run prisma:seed

# 6. Start backend development server (with hot-reload)
npm run dev
```
> The Backend API will be available at **`http://localhost:5000`** (Health endpoint: `http://localhost:5000/api/health`).

### 2. Frontend Setup

```bash
# 1. Open a new terminal and navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Configure frontend environment
cp .env.example .env

# 4. Start Vite development server
npm run dev
```
> The Frontend application will open at **`http://localhost:5173`**.

---

## ☁️ AWS EC2 Deployment Guide

Detailed production deployment guides are available in the [`doc/`](./doc/) directory:

- ☁️ [**AWS EC2 Initial Deployment Guide**](./doc/aws-ec2-initial-deployment.md) — **Master Guide**: Step-by-step instructions for AWS EC2 instance launch, security groups, Elastic IP, Route 53 DNS, SSH with `.pem` key, swap memory, PostgreSQL, Backend API, Frontend SPA, Nginx, Let's Encrypt SSL, and PM2.
- ⚙️ [**Backend Deployment Guide**](./doc/backend-deployment.md) — Production build, Prisma migrations, PM2 daemon configuration, upload permissions.
- 🖥️ [**Frontend Deployment Guide**](./doc/frontend-deployment.md) — Vite production build, SEO metadata generator, Nginx SPA routing fallback.
- 🛠️ [**Troubleshooting & Maintenance**](./doc/troubleshooting-and-maintenance.md) — Zero-downtime updates, database backup/restore, SSL renewal, error resolution.
- 🌐 [**Nginx Configuration Guide**](./nginx/README.md) — Standalone Nginx reverse proxy directives, security headers, and compression tuning.

---

## 🔐 Security & Environment Hygiene

- **AWS Private Keys & PEM Files**: The root [`.gitignore`](./.gitignore) explicitly excludes all certificate and key files (`*.pem`, `*.key`, `*.crt`, `*.pfx`). **Never commit `.pem` keys to version control.**
- **AWS Security Groups**: Ensure only Ports `22` (SSH), `80` (HTTP), and `443` (HTTPS) are exposed in AWS EC2 Security Groups. Keep Backend (5000) and Database (5432) strictly internal.
- **Environment Secrets**: Keep `.env` files strictly on the host server. Use `.env.example` templates for configuration reference.
- **Default Credentials**: Change default superadmin credentials immediately after initial seeding via the `/api/auth/change-password` endpoint.

---

## 📦 Available Scripts

### Root Directory
| Task | Description |
|---|---|
| Review AWS EC2 Guide | See [`doc/aws-ec2-initial-deployment.md`](./doc/aws-ec2-initial-deployment.md) |
| Review Documentation | See [`doc/README.md`](./doc/README.md) |
| Review Nginx Configs | See [`nginx/wvis.conf`](./nginx/wvis.conf) |

### Backend (`/backend`)
```bash
npm run dev              # Start backend dev server with tsx watch
npm run build            # Compile TypeScript to dist/
npm start                # Run production build from dist/index.js
npm run prisma:generate  # Generate Prisma client
npm run prisma:push      # Push Prisma schema to database
npm run prisma:seed      # Seed initial database records
npm run prisma:studio    # Open interactive Prisma Studio GUI
npm test                 # Run Vitest test suites
npm run lint             # Typecheck without emitting files
```

### Frontend (`/frontend`)
```bash
npm run dev              # Start Vite development server with HMR
npm run build            # Run SEO generator + TypeScript compile + Vite build
npm run generate:seo     # Manually generate sitemap.xml and robots.txt
npm run lint             # Run Oxlint linter
npm run preview          # Preview production build locally
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

Copyright © 2026 **WinVinaya Infosystems**. All rights reserved.
