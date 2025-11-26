import { NextFunction, Request, Response } from 'express';
import AdminService from '../services/adminService';
import HelperService from '../services/helperService';

export default class AdminController {
  static async getInstrumentUsageData(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const q = req.query as Record<string, string | string[] | undefined>;

      const first = (v?: string | string[]) => {
        if (!v) return undefined;
        return Array.isArray(v) ? v[0] : v;
      };

      const filters = {
        limit: first(q.limit),
        currentPage: first(q.currentPage),
        sortOrder: first(q.sortOrder),
        sortField: first(q.sortField),
        docStatus: HelperService.isValidDocStatus(first(q.docStatus)),
        searchString: first(q.searchString),
        searchField: first(q.searchField),
        success: first(q.success),
      };

      const result = await AdminService.getInstrumentUsageData(filters);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
