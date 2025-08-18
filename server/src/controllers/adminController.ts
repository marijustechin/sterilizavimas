import { NextFunction, Request, Response } from 'express';
import AdminService from '../services/adminService';

export default class AdminController {
  static async getSterilizationData(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const sterilizationData = await AdminService.getSterilizationData();
      res.status(200).json(sterilizationData);
    } catch (error) {
      next(error);
    }
  }
}
