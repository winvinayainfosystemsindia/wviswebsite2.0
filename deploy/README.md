# 🚀 WinVinaya Infosystems (`deploy/`) - Deployment Automation Scripts

This folder contains battle-tested, automated bash shell scripts to deploy **WinVinaya Infosystems (`wviswebsite2.0`)** effortlessly to an **AWS EC2 Ubuntu** instance (or any Ubuntu 22.04/24.04 VPS).

---

## 📁 Files in this Folder

| File | Purpose | When to Run |
|---|---|---|
| [`setup-ec2.sh`](./setup-ec2.sh) | **Initial Server Setup**: Installs Node.js 22 LTS, PM2, PostgreSQL (`wvis_db`), Nginx, Certbot SSL, sets up 2GB swap memory, and creates `/var/www/wvis`. | **Once**, on a brand new EC2 instance. |
| [`deploy.sh`](./deploy.sh) | **Full Fullstack Deployment / Zero-Downtime Updates**: Pulls git, installs dependencies, pushes Prisma migrations, seeds DB, builds TypeScript backend, builds Vite frontend, reloads PM2, and reloads Nginx. | **Initial deployment** and on **every update/push**. |
| [`setup-nginx-ssl.sh`](./setup-nginx-ssl.sh) | **Nginx & SSL Automation**: Links Nginx configuration, binds custom domain, requests free Let's Encrypt SSL, and activates HTTPS redirection. | **Once**, after domain DNS is pointed to EC2 Elastic IP. |
| [`ecosystem.config.cjs`](./ecosystem.config.cjs) | **PM2 Ecosystem Configuration**: Manages auto-restart, memory limits, and structured log paths. | Used automatically by PM2. |

---

## ⚡ Quick 3-Step EC2 Deployment Workflow

### Step 1: Provision Clean EC2 Instance (One-Time)
SSH into your Ubuntu EC2 instance with your `.pem` key:
```bash
chmod 400 your-key.pem
ssh -i "your-key.pem" ubuntu@<YOUR_EC2_ELASTIC_IP>
```

Clone this repository to `/var/www/wvis` and run the initial setup script:
```bash
# Clone repository
sudo mkdir -p /var/www/wvis && sudo chown -R ubuntu:ubuntu /var/www/wvis
cd /var/www/wvis
git clone <YOUR_GIT_REPO_URL> .

# Run initial setup script (installs Node.js, PM2, PostgreSQL, Nginx, Swap)
sudo bash deploy/setup-ec2.sh
```

---

### Step 2: Build & Start Application
```bash
cd /var/www/wvis
bash deploy/deploy.sh
```
*This single command builds both Frontend and Backend, executes database migrations, and starts backend under PM2.*

---

### Step 3: Configure Domain & Free SSL Certificate (One-Time)
Ensure your domain's DNS A-Record points to your EC2 Elastic IP, then run:
```bash
sudo bash deploy/setup-nginx-ssl.sh winvinaya.com www.winvinaya.com
```

---

## 🔄 Deploying Future Code Updates
Whenever you push changes to GitHub/GitLab, simply log in to your EC2 instance and run:
```bash
cd /var/www/wvis
bash deploy/deploy.sh
```

---

## 📊 Useful Maintenance Commands

```bash
# View backend live logs
pm2 logs wvis-backend

# Check PM2 processes
pm2 status

# Restart backend
pm2 restart wvis-backend

# Test Nginx syntax
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Check Nginx error logs
sudo tail -f /var/log/nginx/wvis_error.log
```
