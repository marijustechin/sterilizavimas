import DepartmentController from '../controllers/departmentController';
import express from 'express';

const departmentRouter = express.Router();

departmentRouter.get('/', DepartmentController.getAll);

export default departmentRouter;
