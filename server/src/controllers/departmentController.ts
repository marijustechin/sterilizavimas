import { NextFunction, Request, Response } from 'express';
import DepartmentService from '../services/departmentService.js';

export default class DepartmentController {
  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const skyriai = await DepartmentService.getAll();
      res.status(200).json(skyriai);
    } catch (error) {
      next(error);
    }
  }

  static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const deletedDepartment = await DepartmentService.delete(Number(id));

      res.status(200).json(deletedDepartment);
    } catch (error) {
      next(error);
    }
  }

  static async patch(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id, department_code, department_name } = req.body;

      const updatedDepartment = await DepartmentService.patch({
        id: id,
        department_code: department_code,
        department_name: department_name,
      });

      res.status(200).json(updatedDepartment);
    } catch (error) {
      next(error);
    }
  }

  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { department_code, department_name } = req.body;

      const newDepartment = await DepartmentService.create({
        department_code: department_code,
        department_name: department_name,
      });

      res.status(200).json(newDepartment);
    } catch (error) {
      next(error);
    }
  }
}
