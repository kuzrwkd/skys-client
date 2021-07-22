module.exports = {
  apps: [
    {
      name: 'SKYS-CLIENT-APP',
      script: 'npm run dev',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
