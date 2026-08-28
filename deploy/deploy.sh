#!/usr/bin/env bash
# ==============================================================================
# WinVinaya Infosystems (wviswebsite2.0) - AWS EC2 Production Deployment Script
# Description: Automates pull, build, migration, PM2 reload, and Nginx reload
# Usage:
#   cd /var/www/wvis
#   bash deploy/deploy.sh
# ==============================================================================

set -e

# Terminal Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Determine script & project root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${PROJECT_ROOT}"

echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}   🚀 WinVinaya Infosystems - Production Deployment (AWS EC2)  ${NC}"
echo -e "${CYAN}================================================================${NC}"
echo -e "${BLUE}📁 Project directory: ${YELLOW}${PROJECT_ROOT}${NC}"

# 1. Pull Latest Code from Git (if .git exists)
if [ -d "${PROJECT_ROOT}/.git" ]; then
    echo -e "\n${BLUE}📥 Step 1/6: Pulling latest changes from Git...${NC}"
    git pull origin main || {
        echo -e "${YELLOW}⚠️ Git pull failed or branch diverged. Continuing with local codebase.${NC}"
    }
else
    echo -e "\n${YELLOW}⚠️ No .git folder detected. Skipping git pull.${NC}"
fi

# 2. Backend Deployment (Express 5 + Prisma + TypeScript)
echo -e "\n${BLUE}⚙️ Step 2/6: Deploying Backend Service...${NC}"
cd "${PROJECT_ROOT}/backend"

# Ensure .env exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️ backend/.env not found! Creating from .env.example...${NC}"
    cp .env.example .env
    # Generate random JWT secret if placeholder
    sed -i 's/super-secret-jwt-key-change-in-production-min-32-chars-length/'"$(openssl rand -hex 32)"'/g' .env 2>/dev/null || true
    echo -e "${RED}❗ Please review and update database credentials in backend/.env if needed.${NC}"
fi

echo -e "${CYAN}📦 Installing backend dependencies...${NC}"
npm install

echo -e "${CYAN}🔄 Running Prisma client generation & schema push...${NC}"
npx prisma generate
npx prisma db push

# Run seed if database is empty
if [ "$1" == "--seed" ] || [ ! -f "${PROJECT_ROOT}/backend/.seeded" ]; then
    echo -e "${CYAN}🌱 Seeding default superadmin & categories...${NC}"
    npm run prisma:seed || echo -e "${YELLOW}⚠️ Seeding skipped or already completed.${NC}"
    touch "${PROJECT_ROOT}/backend/.seeded"
fi

echo -e "${CYAN}🔨 Compiling TypeScript backend to dist/...${NC}"
npm run build

echo -e "${CYAN}📁 Setting up uploads folder & permissions...${NC}"
mkdir -p uploads/blogs uploads/newsletters uploads/ebooks uploads/images uploads/documents
sudo chown -R $USER:www-data uploads 2>/dev/null || chown -R $USER uploads
sudo chmod -R 775 uploads 2>/dev/null || chmod -R 775 uploads

# 3. Reload Backend via PM2 Process Manager
echo -e "\n${BLUE}🔄 Step 3/6: Reloading Backend via PM2...${NC}"
if pm2 describe wvis-backend > /dev/null 2>&1; then
    echo -e "${CYAN}🔄 Reloading running PM2 process 'wvis-backend'...${NC}"
    pm2 reload wvis-backend --update-env
else
    echo -e "${CYAN}🚀 Starting new PM2 process 'wvis-backend'...${NC}"
    pm2 start dist/index.js --name "wvis-backend" --max-memory-restart 1G
fi

# Save PM2 state for system reboot
pm2 save
echo -e "${GREEN}✅ Backend PM2 service is running.${NC}"

# 4. Frontend Deployment (React 19 + Vite SPA)
echo -e "\n${BLUE}🖥️ Step 4/6: Building Frontend SPA...${NC}"
cd "${PROJECT_ROOT}/frontend"

if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️ frontend/.env not found! Creating from .env.example...${NC}"
    cp .env.example .env
fi

echo -e "${CYAN}📦 Installing frontend dependencies...${NC}"
npm install

echo -e "${CYAN}🔨 Building production frontend bundle & SEO assets...${NC}"
npm run build
echo -e "${GREEN}✅ Frontend built successfully to frontend/dist/.${NC}"

# 5. Reload Nginx Web Server
echo -e "\n${BLUE}🌐 Step 5/6: Testing & Reloading Nginx...${NC}"
if command -v nginx &> /dev/null; then
    if sudo nginx -t 2>/dev/null || nginx -t 2>/dev/null; then
        sudo systemctl reload nginx 2>/dev/null || systemctl reload nginx 2>/dev/null || true
        echo -e "${GREEN}✅ Nginx reloaded successfully.${NC}"
    else
        echo -e "${RED}❌ Nginx syntax check failed. Please check /etc/nginx/sites-available/wvis.conf${NC}"
    fi
else
    echo -e "${YELLOW}⚠️ Nginx not installed yet. Run deploy/setup-ec2.sh first.${NC}"
fi

# 6. Verify Health Endpoints
echo -e "\n${BLUE}🔍 Step 6/6: Verifying service health...${NC}"
sleep 2

HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:5000/api/health || echo "Failed")

if [ "$HEALTH_CHECK" == "200" ]; then
    echo -e "${GREEN}✅ Backend API is healthy on http://127.0.0.1:5000/api/health (HTTP 200).${NC}"
else
    echo -e "${YELLOW}⚠️ Backend health returned: ${HEALTH_CHECK}. Check logs with: pm2 logs wvis-backend${NC}"
fi

echo -e "\n${GREEN}================================================================${NC}"
echo -e "${GREEN}   🎉 Deployment Completed Successfully!                       ${NC}"
echo -e "${GREEN}================================================================${NC}"
echo -e "${CYAN}📊 Useful Commands:${NC}"
echo -e "  - View live logs:    ${YELLOW}pm2 logs wvis-backend${NC}"
echo -e "  - Check PM2 status:  ${YELLOW}pm2 status${NC}"
echo -e "  - Nginx error logs:  ${YELLOW}sudo tail -f /var/log/nginx/wvis_error.log${NC}"
