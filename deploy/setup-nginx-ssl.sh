#!/usr/bin/env bash
# ==============================================================================
# WinVinaya Infosystems (wviswebsite2.0) - Nginx & SSL Setup Script
# Usage:
#   sudo bash deploy/setup-nginx-ssl.sh [domain.com] [www.domain.com]
# Example:
#   sudo bash deploy/setup-nginx-ssl.sh winvinaya.com www.winvinaya.com
# ==============================================================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}❌ Error: This script must be run as root or with sudo.${NC}"
   exit 1
fi

DOMAIN_1="${1:-winvinaya.com}"
DOMAIN_2="${2:-www.winvinaya.com}"

echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}   🌐 Nginx & Let's Encrypt SSL Automated Setup               ${NC}"
echo -e "${CYAN}================================================================${NC}"
echo -e "${BLUE}Configuring domain: ${YELLOW}${DOMAIN_1} ${DOMAIN_2}${NC}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

# 1. Copy initial HTTP starter configuration
echo -e "\n${BLUE}📝 Step 1/4: Installing starter Nginx configuration...${NC}"
cp "${PROJECT_ROOT}/nginx/wvis-http-only.conf" /etc/nginx/sites-available/wvis.conf

# Update server_name in configuration
sed -i "s/server_name winvinaya.com www.winvinaya.com;/server_name ${DOMAIN_1} ${DOMAIN_2};/g" /etc/nginx/sites-available/wvis.conf

# 2. Symlink and enable site
echo -e "\n${BLUE}🔗 Step 2/4: Enabling site and testing Nginx...${NC}"
ln -sf /etc/nginx/sites-available/wvis.conf /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl reload nginx
echo -e "${GREEN}✅ HTTP Starter Nginx site active.${NC}"

# 3. Request SSL Certificate via Certbot
echo -e "\n${BLUE}🔒 Step 3/4: Requesting Let's Encrypt SSL Certificate...${NC}"
certbot --nginx -d "${DOMAIN_1}" -d "${DOMAIN_2}" --non-interactive --agree-tos --register-unsafely-without-email --redirect || {
    echo -e "${YELLOW}⚠️ Automatic non-interactive Certbot failed. Running interactive certbot...${NC}"
    certbot --nginx -d "${DOMAIN_1}" -d "${DOMAIN_2}"
}

# 4. Switch to full hardened production configuration
echo -e "\n${BLUE}🛡️ Step 4/4: Activating hardened production SSL configuration...${NC}"
cp "${PROJECT_ROOT}/nginx/wvis.conf" /etc/nginx/sites-available/wvis.conf
sed -i "s/server_name winvinaya.com www.winvinaya.com;/server_name ${DOMAIN_1} ${DOMAIN_2};/g" /etc/nginx/sites-available/wvis.conf

nginx -t
systemctl reload nginx

echo -e "\n${GREEN}================================================================${NC}"
echo -e "${GREEN}   🎉 Nginx & SSL Setup Completed Successfully!               ${NC}"
echo -e "${GREEN}================================================================${NC}"
echo -e "Your website is now live at: ${CYAN}https://${DOMAIN_1}${NC}"
