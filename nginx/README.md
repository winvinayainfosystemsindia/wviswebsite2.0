# 🌐 WinVinaya Infosystems - Nginx Deployment & Routing Guide

This directory contains the production-grade **Nginx configuration files** for deploying **WinVinaya Infosystems (`wviswebsite2.0`)** on any Linux VPS or server (Ubuntu / Debian / CentOS) without Docker.

---

## 📁 Files Overview

| File | Purpose |
|---|---|
| [`wvis.conf`](./wvis.conf) | **Full Production Configuration** (HTTP + HTTPS SSL, HTTP/2, Gzip, Security Headers, SPA Fallback, `/api/` Proxy, `/uploads/` Direct Serving) |
| [`wvis-http-only.conf`](./wvis-http-only.conf) | **Starter Configuration** (Port 80 HTTP only — use during initial setup before obtaining SSL via Certbot) |

---

## 🏗️ Architecture & Routing Map

```
                     Internet (Port 80 / 443)
                                │
                                ▼
                         ┌─────────────┐
                         │    NGINX    │
                         └──────┬──────┘
                                │
        ┌───────────────────────┼────────────────────────┐
        ▼                       ▼                        ▼
  SPA Client Routes        API Requests            Static Uploads
  (`/`, `/about-us`,      (`/api/*`)               (`/uploads/*`)
  `/admin/*`, etc.)             │                        │
        │                       ▼                        ▼
        ▼              Express 5 Backend          Direct from Disk
  `frontend/dist/`     (http://127.0.0.1:5000)   `backend/uploads/`
  `index.html` (SPA)                              (Images, PDFs, Docs)
```

---

## 🚀 Step-by-Step Deployment Instructions

### Step 1: Install Nginx & Node.js on Your Server

On Ubuntu / Debian:
```bash
sudo apt update
sudo apt install -y nginx curl git

# Install Node.js v20+ or v22+
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 Process Manager globally
sudo npm install -g pm2
```

---

### Step 2: Clone & Prepare Project Directories

Assuming you deploy to `/var/www/wvis`:
```bash
# Create target directory
sudo mkdir -p /var/www/wvis
sudo chown -R $USER:$USER /var/www/wvis

# Clone your repository
cd /var/www/wvis
git clone <YOUR_GIT_REPO_URL> .
```

---

### Step 3: Build & Start Backend Service

```bash
cd /var/www/wvis/backend

# 1. Install dependencies
npm install

# 2. Configure Environment Variables
cp .env.example .env
nano .env   # Set your DATABASE_URL, JWT_SECRET, and PORT=5000

# 3. Prisma setup & Database migration
npx prisma generate
npx prisma db push
npx prisma db seed    # Seeds default superadmin user & taxonomy

# 4. Build TypeScript
npm run build

# 5. Ensure uploads directory exists and permissions are set
mkdir -p uploads
chmod -R 775 uploads

# 6. Start Backend using PM2
pm2 start dist/index.js --name "wvis-backend"
pm2 save
pm2 startup
```

---

### Step 4: Build Frontend Production Bundle

```bash
cd /var/www/wvis/frontend

# 1. Install dependencies
npm install

# 2. Configure environment (VITE_API_URL should be /api)
cp .env.example .env

# 3. Build SPA static bundle
npm run build
```
This generates the optimized production build at `/var/www/wvis/frontend/dist`.

---

### Step 5: Configure Nginx

#### Option A: Quick Setup with Free Let's Encrypt SSL (Recommended)

1. Copy the starter HTTP configuration:
   ```bash
   sudo cp /var/www/wvis/nginx/wvis-http-only.conf /etc/nginx/sites-available/wvis.conf
   ```

2. Edit server domain name:
   ```bash
   sudo nano /etc/nginx/sites-available/wvis.conf
   # Check server_name is set to:
   # server_name winvinaya.com www.winvinaya.com;
   ```

3. Enable the site and test configuration:
   ```bash
   sudo ln -sf /etc/nginx/sites-available/wvis.conf /etc/nginx/sites-enabled/
   # Remove default Nginx site if present
   sudo rm -f /etc/nginx/sites-enabled/default

   # Test Nginx syntax
   sudo nginx -t

   # Reload Nginx
   sudo systemctl reload nginx
   ```

4. Obtain Free SSL with Certbot:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d winvinaya.com -d www.winvinaya.com
   ```
   *Certbot will automatically configure HTTPS, renew certificates, and redirect HTTP to HTTPS.*

---

#### Option B: Manual Full SSL Setup (`wvis.conf`)

If you already have your SSL certificate keys (e.g. from Cloudflare or custom CA):
1. Copy the full configuration:
   ```bash
   sudo cp /var/www/wvis/nginx/wvis.conf /etc/nginx/sites-available/wvis.conf
   ```

2. Open `/etc/nginx/sites-available/wvis.conf` and verify:
   - `server_name winvinaya.com www.winvinaya.com;`
   - `ssl_certificate /etc/letsencrypt/live/winvinaya.com/fullchain.pem;`
   - `ssl_certificate_key /etc/letsencrypt/live/winvinaya.com/privkey.pem;`
   - `root /var/www/wvis/frontend/dist;`
   - `alias /var/www/wvis/backend/uploads/;`

3. Enable & Restart:
   ```bash
   sudo ln -sf /etc/nginx/sites-available/wvis.conf /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## 🛠️ Verification & Useful Commands

| Action | Command |
|---|---|
| **Test Nginx Syntax** | `sudo nginx -t` |
| **Reload Nginx (Zero Downtime)** | `sudo systemctl reload nginx` |
| **Restart Nginx** | `sudo systemctl restart nginx` |
| **View Nginx Access Logs** | `sudo tail -f /var/log/nginx/wvis_access.log` |
| **View Nginx Error Logs** | `sudo tail -f /var/log/nginx/wvis_error.log` |
| **Check Backend Status** | `pm2 status` |
| **Check Backend Logs** | `pm2 logs wvis-backend` |
| **Restart Backend** | `pm2 restart wvis-backend` |

---

## 🔍 Troubleshooting Checklist

- **Issue: 404 Not Found on refreshing pages like `/about-us` or `/admin/login`**
  - *Fix*: Ensure `location / { try_files $uri $uri/ /index.html; }` is present in your Nginx config.
- **Issue: 502 Bad Gateway on `/api/*`**
  - *Fix*: Check if backend is running on port 5000: `pm2 status` or `curl http://127.0.0.1:5000/api/health`.
- **Issue: 413 Request Entity Too Large when uploading PDF or Image**
  - *Fix*: Ensure `client_max_body_size 35M;` is present in your server block.
- **Issue: 403 Forbidden on `/uploads/*`**
  - *Fix*: Check file permissions on the backend uploads directory:
    ```bash
    sudo chown -R www-data:www-data /var/www/wvis/backend/uploads
    sudo chmod -R 775 /var/www/wvis/backend/uploads
    ```
