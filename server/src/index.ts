import config from './config/config.js';
import app from './app.js';

app.listen(config.port, () => {
  console.log(`SPIS API serveris:${config.port}; Aplinka: ${config.nodeEnv}`);
});
