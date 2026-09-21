# WinVinaya Infosystems — Production Deployment Suite

This directory contains modular, production-ready shell scripts for deploying, configuring, and monitoring the **WinVinaya Infosystems** (`wviswebsite2.0`) web application on AWS EC2 / Linux servers.

---

## 📁 Directory Overview

| Script | Purpose |
| :--- | :--- |
| **[`deploy.sh`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/deploy/deploy.sh)** | **Master deployment script** that coordinates Git pull, backend build, frontend build, Nginx reload, and health checks. |
| **[`deploy-backend.sh`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/deploy/deploy-backend.sh)** | Installs backend dependencies, runs Prisma client generation & DB push, builds TypeScript to `dist/`, and reloads PM2 with zero downtime. |
| **[`deploy-frontend.sh`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/deploy/deploy-frontend.sh)** | Installs frontend dependencies, compiles Vite + React 19 assets to `dist/`, applies correct file permissions, and reloads Nginx. |
| **[`health-check.sh`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/deploy/health-check.sh)** | Performs comprehensive diagnostic checks on Backend API (`/api/health`), PM2 process (`wvis-backend`), PostgreSQL, Nginx, and disk/memory health. |
| **[`setup-nginx.sh`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/deploy/setup-nginx.sh)** | Installs and configures Nginx virtual host files from `nginx/wvis.conf` to `/etc/nginx/sites-available/` and reloads Nginx. |
| **[`setup-ec2.sh`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/deploy/setup-ec2.sh)** | Automated provisioning script for fresh AWS EC2 instances (Node.js 22 LTS, PM2, PostgreSQL, Nginx, UFW Firewall, Swap memory). |
| **[`common.sh`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/deploy/common.sh)** | Shared logging utilities, color formatting, prerequisite checks, and path constants. |

---

## 🚀 Quick Start & Usage

### 1. Make Scripts Executable

```bash
chmod +x deploy/*.sh
```

### 2. Full Application Deployment (Default)

Pulls latest code from `main`, updates DB & builds backend, compiles frontend, reloads PM2/Nginx, and runs health checks:

```bash
./deploy/deploy.sh
```

### 3. Deploy Specific Components

#### Backend Only:
```bash
./deploy/deploy-backend.sh

# With database seeding:
./deploy/deploy-backend.sh --seed
```

#### Frontend Only:
```bash
./deploy/deploy-frontend.sh
```

#### Run Health Check & Diagnostics:
```bash
./deploy/health-check.sh

# Verbose mode with system metrics:
./deploy/health-check.sh --verbose

# JSON output for monitoring / automated scripts:
./deploy/health-check.sh --json
```

---

## ⚙️ Advanced Flags for `deploy.sh`

```bash
# Deploy without pulling latest code from Git (local deployment)
./deploy/deploy.sh --skip-git

# Deploy only backend through master script
./deploy/deploy.sh --skip-frontend

# Deploy only frontend through master script
./deploy/deploy.sh --skip-backend

# Deploy a specific branch (e.g., staging or production)
./deploy/deploy.sh --branch production

# Run database seeder during deployment
./deploy/deploy.sh --seed
```

---

## 🔄 GitHub Actions CI/CD Integration

The repository is configured with an automated CI/CD pipeline in [`.github/workflows/deploy.yml`](file:///c:/External-projects/WinVinaya/wviswebsite2.0/.github/workflows/deploy.yml).

### Workflow Jobs:
1. **`ci-audit` (Continuous Integration)**:
   - Triggers on every push to `main` and `production`.
   - Validates Backend Prisma schema and TypeScript types (`npx tsc --noEmit`).
   - Builds Frontend production bundle with Vite.
   - Validates syntax of all deployment shell scripts (`bash -n deploy/*.sh`).

2. **`cd-deploy` (Continuous Deployment)**:
   - Triggers automatically when code is pushed to `main` after CI checks pass.
   - Connects to your production EC2 server over SSH via `appleboy/ssh-action@v1.0.3`.
   - Runs `./deploy/deploy.sh --skip-git --branch ${{ github.ref_name }}`.

### Required GitHub Repository Secrets:

| Secret Name | Description | Example |
| :--- | :--- | :--- |
| `PRODUCTION_HOST` | Public IP or domain name of EC2 server | `13.233.xxx.xxx` or `ec2.winvinaya.com` |
| `PRODUCTION_USER` | SSH username | `ubuntu` |
| `PRODUCTION_SSH_KEY` | Private SSH key (`.pem` content) | `-----BEGIN RSA PRIVATE KEY-----...` |
| `PRODUCTION_PORT` | SSH Port (optional, defaults to 22) | `22` |
| `PRODUCTION_DEPLOY_PATH` | Project directory on server | `/var/www/wvis` |
