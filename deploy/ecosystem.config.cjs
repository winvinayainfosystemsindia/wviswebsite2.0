// ==============================================================================
// WinVinaya Infosystems (wviswebsite2.0) - PM2 Production Ecosystem Config
// Usage: pm2 start deploy/ecosystem.config.cjs --env production
// ==============================================================================

module.exports = {
  apps: [
    {
      name: "wvis-backend",
      script: "./backend/dist/index.js",
      cwd: "/var/www/wvis",
      instances: 1, // Set to 'max' for cluster mode on multi-core EC2
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_production: {
        NODE_ENV: "production",
        PORT: 5000
      },
      error_file: "/var/log/pm2/wvis-backend-error.log",
      out_file: "/var/log/pm2/wvis-backend-out.log",
      time: true
    }
  ]
};
