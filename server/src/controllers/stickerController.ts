// controllers/stickerController.ts
import { NextFunction, Request, Response } from 'express';
import StickerService from '../services/stickerService';

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
        cycleNumber: first(q.cycleNumber),
        departmentCode: first(q.departmentCode),
        instrumentCode: first(q.instrumentCode),
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
      const { short_code } = req.body;

      const updatedSterilizationCycleItem =
        await StickerService.toggleStickerSuccess(short_code);

      res.status(200).json(updatedSterilizationCycleItem);
    } catch (error) {
      next(error);
    }
  }
}
