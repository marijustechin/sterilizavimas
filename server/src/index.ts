import dotenv from 'dotenv';
dotenv.config();

import config from './config/config';
import app from './app';

app.listen(config.port, () => {
  console.log(`SPIS API serveris:${config.port}; Aplinka: ${config.nodeEnv}`);
});
