# WinVinaya Infosystems Backend API (`wvis-backend`)

Enterprise-grade Express 5 + TypeScript + Prisma ORM backend service for **WinVinaya Infosystems** (`wviswebsite2.0`).

---

## 🛠️ Technology Stack

- **Runtime & Language**: Node.js v24+, Express 5, TypeScript 5.8
- **Database & ORM**: PostgreSQL with Prisma ORM 6
- **Validation**: Zod schema validation for all endpoints
- **Security & Hardening**:
  - `helmet`: Secure HTTP headers (CSP, HSTS, XSS protection, anti-clickjacking)
  - `cors`: Whitelisted cross-origin resource sharing
  - `express-rate-limit`: Global anti-DDoS, brute-force login protection, anti-spam form limiter
  - `sanitize-html`: Deep recursive request payload sanitization against XSS
- **Authentication**: JWT (`jsonwebtoken`) + `bcryptjs` password hashing + Role-Based Access Control (`SUPERADMIN`, `ADMIN`, `EDITOR`)
- **File Uploads**: `multer` for secure PDF, image, and document storage
- **Logging**: Morgan HTTP logger + structured timestamped system logger
- **Testing**: Vitest + Supertest

---

## 📁 Directory Structure

```
backend/
├── prisma/
│   ├── schema.prisma       # Database schema definition
│   └── seed.ts             # Initial superadmin & content seeder
├── src/
│   ├── auth/               # Authentication & user management
│   ├── blog/               # Public & Admin blog management
│   ├── newsletter/         # Public & Admin monthly newsletters
│   ├── ebook/              # Public & Admin eBooks & guides
│   ├── careers/            # Public & Admin internship & career openings
│   ├── contact/            # Public contact inquiries & admin review status
│   ├── testimonials/       # Client & partner testimonials
│   ├── stories/            # Impact success stories
│   ├── categories/         # Dynamic content taxonomy
│   ├── upload/             # Secure file upload router & controller
│   ├── lib/                # Prisma client singleton, logger, multer upload
│   ├── middleware/         # Auth guard, Zod validator, error handler, rate limiters, XSS sanitizer
│   ├── __tests__/          # Automated API test suites
│   ├── app.ts              # Express application configuration
│   ├── env.ts              # Type-safe Zod environment validation
│   └── index.ts            # Server entry point & graceful shutdown
├── uploads/                # Local storage directory for uploads (images, PDFs, documents)
├── .env.example            # Environment variable template
├── package.json            # Scripts & dependencies
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or v20+)
- PostgreSQL database instance

### 2. Installation
```bash
cd backend
npm install
```

### 3. Environment Configuration
Copy the example environment file:
```bash
cp .env.example .env
```
Edit `.env` to match your PostgreSQL credentials and JWT secret.

### 4. Database Setup & Seeding
```bash
# Generate Prisma client
npm run prisma:generate

# Push schema to database
npm run prisma:push

# Seed default admin and sample data
npm run prisma:seed
```

### 5. Running in Development
```bash
npm run dev
```
The server will start at `http://localhost:5000`.

---

## 🔐 Default Superadmin Credentials
- **Email**: `admin@winvinaya.com`
- **Password**: `WinVinaya@2026!`

*(Remember to change the default password after first login via `/api/auth/change-password`)*

---

## 📡 API Endpoints Overview

### Public Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status & uptime |
| `POST` | `/api/contact` | Submit contact inquiry |
| `GET` | `/api/blog` | List published blog posts (supports `category`, `tag`, `search`, `page`, `limit`) |
| `GET` | `/api/blog/:slug` | Get single blog post by slug |
| `GET` | `/api/newsletter` | List newsletters (supports `year`, `search`, `page`, `limit`) |
| `GET` | `/api/newsletter/:id` | Get newsletter details |
| `GET` | `/api/ebook` | List eBooks & guides |
| `GET` | `/api/ebook/:id` | Get eBook details |
| `GET` | `/api/careers` | List internship & job openings |
| `GET` | `/api/testimonials` | List client & partner testimonials |
| `GET` | `/api/stories` | List impact success stories |
| `GET` | `/api/stories/:slug` | Get story by slug |
| `GET` | `/api/categories` | List content categories |

### Admin Endpoints (Require `Authorization: Bearer <token>`)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Admin login & JWT generation |
| `GET` | `/api/auth/me` | Current authenticated user profile |
| `POST` | `/api/auth/change-password` | Update current user password |
| `GET / POST / PATCH / DELETE` | `/api/admin/blog` | Blog CRUD operations |
| `GET / POST / PATCH / DELETE` | `/api/admin/newsletter` | Newsletter CRUD operations |
| `GET / POST / PATCH / DELETE` | `/api/admin/ebook` | eBook CRUD operations |
| `GET / POST / PATCH / DELETE` | `/api/admin/careers` | Career openings CRUD operations |
| `GET / PATCH / DELETE` | `/api/admin/contact` | Review inquiries, update status (`NEW`, `IN_PROGRESS`, `RESOLVED`, `ARCHIVED`) |
| `GET / POST / PATCH / DELETE` | `/api/admin/testimonials` | Testimonial CRUD operations |
| `GET / POST / PATCH / DELETE` | `/api/admin/stories` | Success stories CRUD operations |
| `GET / POST / PATCH / DELETE` | `/api/admin/categories` | Categories CRUD operations |
| `POST` | `/api/admin/upload` | Upload images, PDFs, and document assets |

---

## 🧪 Running Tests & Build Verification

```bash
# Run automated tests
npm test

# Type check
npm run lint

# Production build
npm run build
```
