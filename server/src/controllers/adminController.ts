import { NextFunction, Request, Response } from 'express';
import AdminService from '../services/adminService.js';
import HelperService from '../services/helperService.js';

export default class AdminController {
  /**
   *
   * @param q
   */
  private static parseQuery(q: Record<string, string | string[] | undefined>) {
    const first = (v?: string | string[]) => {
      if (!v) return undefined;
      return Array.isArray(v) ? v[0] : v;
    };
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
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

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  static async getReports(req: Request, res: Response, next: NextFunction) {
    try {
      const q = req.query as Record<string, string | string[] | undefined>;

      const first = (v?: string | string[]) => {
        if (!v) return undefined;
        return Array.isArray(v) ? v[0] : v;
      };

      const result = await AdminService.getReports(
        first(q.startDate),
        first(q.endDate)
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
