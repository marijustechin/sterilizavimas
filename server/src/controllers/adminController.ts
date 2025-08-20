import { NextFunction, Request, Response } from 'express';
import AdminService from '../services/adminService';

export default class AdminController {
  static async getSterilizationData(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { page, limit, sort, filter } = req.query;

      // Patikriname ir konvertuojame parametrus į tinkamą formatą
      const pageNumber = typeof page === 'string' ? Number(page) : 1;
      const limitNumber = typeof limit === 'string' ? Number(limit) : 10;
      const sortValue = typeof sort === 'string' ? sort : 'instrument:asc';
      const filterValue = typeof filter === 'string' ? filter : '';

      const sterilizationData = await AdminService.getSterilizationData(
        pageNumber,
        limitNumber,
        sortValue,
        filterValue
      );

      res.status(200).json(sterilizationData);
    } catch (error) {
      next(error);
    }
  }
}
