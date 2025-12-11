// controllers/stickerController.ts
import { NextFunction, Request, Response } from 'express';
import StickerService from '../services/stickerService.js';

export default class StickerController {
  static async getAll(
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
        cycleNumber: first(q.cycleNumber),
        departmentCode: first(q.departmentCode),
        instrumentCode: first(q.instrumentCode),
        onlyDefected: first(q.onlyDefecet),
        searchString: first(q.search),
      };

      const stickers = await StickerService.getAll(filters);

      res.status(200).json(stickers);
    } catch (error) {
      next(error);
    }
  }

  static async toggleStickerSuccess(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { short_code, user_id } = req.body;
      const updatedSterilizationCycleItem =
        await StickerService.toggleStickerSuccess(short_code, user_id);

      res.status(200).json(updatedSterilizationCycleItem);
    } catch (error) {
      next(error);
    }
  }
}
