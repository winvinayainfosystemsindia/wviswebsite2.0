#!/usr/bin/env bash
# ==============================================================================
# WinVinaya Infosystems (wviswebsite2.0) - AWS EC2 Initial Server Setup Script
# Target OS: Ubuntu 22.04 LTS / Ubuntu 24.04 LTS
# Usage: Run with sudo or as root on a fresh AWS EC2 instance
#   curl -fsSL https://raw.githubusercontent.com/.../deploy/setup-ec2.sh | sudo bash
#   OR: sudo bash deploy/setup-ec2.sh
# ==============================================================================

set -e

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}   🚀 WinVinaya Infosystems - AWS EC2 Server Setup Script     ${NC}"
echo -e "${CYAN}================================================================${NC}"

# 1. Check Root Privileges
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}❌ Error: This script must be run as root or with sudo.${NC}"
   exit 1
fi

CURRENT_USER=${SUDO_USER:-$(whoami)}
echo -e "${BLUE}ℹ️ Running setup for system user: ${YELLOW}${CURRENT_USER}${NC}"

# 2. Update System Packages
echo -e "\n${BLUE}📦 Step 1/7: Updating system packages...${NC}"
apt-get update -y
DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
apt-get install -y curl wget git ufw build-essential software-properties-common ca-certificates gnupg

# 3. Setup 2GB Swap Memory (Vital for t2.micro/t3.micro/t3.small)
echo -e "\n${BLUE}🧠 Step 2/7: Configuring 2GB Swap Space...${NC}"
if [ -f /swapfile ]; then
    echo -e "${YELLOW}⚠️ Swapfile already exists. Skipping swap creation.${NC}"
else
    fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    if ! grep -q '/swapfile' /etc/fstab; then
        echo '/swapfile none swap sw 0 0' >> /etc/fstab
    fi
    echo -e "${GREEN}✅ 2GB Swap memory configured successfully.${NC}"
fi

# 4. Install Node.js 22 LTS & PM2
echo -e "\n${BLUE}🟢 Step 3/7: Installing Node.js 22 LTS and PM2...${NC}"
if ! command -v node &> /dev/null || [[ $(node -v) != v22* && $(node -v) != v20* ]]; then
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
    apt-get install -y nodejs
fi
npm install -g pm2
echo -e "${GREEN}✅ Node.js $(node -v) and PM2 $(pm2 -v) installed.${NC}"

# 5. Install PostgreSQL & Initialize Database
echo -e "\n${BLUE}🐘 Step 4/7: Installing PostgreSQL...${NC}"
apt-get install -y postgresql postgresql-contrib
systemctl enable postgresql
systemctl start postgresql

DB_NAME="wvis_db"
DB_USER="wvis_user"
DB_PASS="WinVinayaDB@2026!"

echo -e "${CYAN}🔧 Configuring PostgreSQL database '${DB_NAME}' and user '${DB_USER}'...${NC}"
sudo -u postgres psql << EOF
DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '${DB_USER}') THEN
      CREATE ROLE ${DB_USER} WITH LOGIN ENCRYPTED PASSWORD '${DB_PASS}';
   END IF;
END
\$\$;

SELECT 'CREATE DATABASE ${DB_NAME} OWNER ${DB_USER}'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${DB_NAME}')\gexec

GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};
\c ${DB_NAME}
GRANT ALL ON SCHEMA public TO ${DB_USER};
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO ${DB_USER};
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO ${DB_USER};
EOF
echo -e "${GREEN}✅ PostgreSQL database configured.${NC}"

# 6. Install Nginx & Certbot
echo -e "\n${BLUE}🌐 Step 5/7: Installing Nginx and Certbot SSL...${NC}"
apt-get install -y nginx certbot python3-certbot-nginx
systemctl enable nginx
systemctl start nginx
echo -e "${GREEN}✅ Nginx and Certbot installed.${NC}"

# 7. Configure Target Deployment Directory
echo -e "\n${BLUE}📁 Step 6/7: Setting up /var/www/wvis directory...${NC}"
mkdir -p /var/www/wvis
chown -R ${CURRENT_USER}:${CURRENT_USER} /var/www/wvis
chmod -R 755 /var/www/wvis
echo -e "${GREEN}✅ Target deployment directory ready at /var/www/wvis.${NC}"

# 8. Configure UFW Firewall
echo -e "\n${BLUE}🛡️ Step 7/7: Configuring Firewall (UFW)...${NC}"
ufw allow OpenSSH
ufw allow 'Nginx Full'
# Enable UFW non-interactively
echo "y" | ufw enable || true
echo -e "${GREEN}✅ Firewall enabled (Ports 22, 80, 443 active).${NC}"

echo -e "\n${GREEN}================================================================${NC}"
echo -e "${GREEN}   🎉 Base Server Setup Completed Successfully!                ${NC}"
echo -e "${GREEN}================================================================${NC}"
echo -e "${YELLOW}Next Steps:${NC}"
echo -e "1. Clone or copy your repository to ${CYAN}/var/www/wvis${NC}"
echo -e "2. Run ${CYAN}bash deploy/deploy.sh${NC} to build & start frontend and backend."
echo -e "3. Run ${CYAN}sudo bash deploy/setup-nginx-ssl.sh${NC} to bind your domain with SSL."
