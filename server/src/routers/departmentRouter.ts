import DepartmentController from '../controllers/departmentController';
import express from 'express';

const departmentRouter = express.Router();

departmentRouter.get('/', DepartmentController.getAll);
departmentRouter.delete('/:id', DepartmentController.delete);
departmentRouter.patch('/', DepartmentController.patch);
departmentRouter.post('/', DepartmentController.create);

export default departmentRouter;
