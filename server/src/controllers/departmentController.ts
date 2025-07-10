import { NextFunction, Request, Response } from 'express';
import DepartmentService from '../services/departmentService';

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
}
