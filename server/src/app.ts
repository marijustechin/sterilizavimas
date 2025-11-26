import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/errorMiddleware.js';

// Routers
import userRouter from './routers/userRouter.js';
import departmentRouter from './routers/departmentRouter.js';
import instrumentRouter from './routers/instrumentRouter.js';
import sterilizerRouter from './routers/sterilizerRouter.js';
import sterilizationRouter from './routers/sterilizationRouter.js';
import adminRouter from './routers/adminRouter.js';
import printerRouter from './routers/printerRouter.js';
import stickerRouter from './routers/stickerRouter.js';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:5173',
      'https://autoclave.karpol.lt',
      'https://fsign-test.karpol.lt',
    ],
  })
);

app.use(express.json());
app.use(cookieParser());

// Routers
app.use('/api/v1/user', userRouter);
app.use('/api/v1/department', departmentRouter);
app.use('/api/v1/instrument', instrumentRouter);
app.use('/api/v1/sterilizer', sterilizerRouter);
app.use('/api/v1/sterilization', sterilizationRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/printer', printerRouter);
app.use('/api/v1/sticker', stickerRouter);

app.use(errorMiddleware);

export default app;
