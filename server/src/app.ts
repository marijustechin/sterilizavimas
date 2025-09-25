import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/errorMiddleware';

// Routers
import userRouter from './routers/userRouter';
import departmentRouter from './routers/departmentRouter';
import instrumentRouter from './routers/instrumentRouter';
import sterilizerRouter from './routers/sterilizerRouter';
import sterilizationRouter from './routers/sterilizationRouter';
import adminRouter from './routers/adminRouter';
import medicRouter from './routers/medicRouter';
import printerRouter from './routers/printerRouter';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173', 'https://autoclave.karpol.lt', 'https://fsign.karpol.lt'],
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
app.use('/api/v1/medic', medicRouter);
app.use('/api/v1/printer', printerRouter);

app.use(errorMiddleware);

export default app;
