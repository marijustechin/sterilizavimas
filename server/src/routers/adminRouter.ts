import AdminController from '../controllers/adminController';
import express from 'express';

const adminRouter = express.Router();

adminRouter.get('/usage', AdminController.getInstrumentUsageData);

export default adminRouter;
