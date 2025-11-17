module.exports = {
  apps: [
    {
      name: 'backend-api',
      script: './dist/index.js',
      instances: 4,
      exec_mode: 'cluster',
      watch: true,
      ignore_watch: ['node_modules', 'logs', 'temp'],
      max_memory_restart: '300M',
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
