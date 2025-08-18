import AdminController from '../controllers/adminController';
import express from 'express';

const adminRouter = express.Router();

adminRouter.get('/sterilization', AdminController.getSterilizationData);

export default adminRouter;
