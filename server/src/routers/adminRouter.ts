import AdminController from '../controllers/adminController.js';
import express from 'express';

const adminRouter = express.Router();

adminRouter.get('/usage', AdminController.getInstrumentUsageData);
adminRouter.get('/reports', AdminController.getReports);

export default adminRouter;
