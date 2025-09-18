import { NextFunction, Request, Response } from 'express';
import MedicService from '../services/medicService';

export default class MedicController {
  static async getStickerDetails(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { stickerString } = req.body;

      const result = await MedicService.getStickerDetails(stickerString);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async saveUsedInstruments(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await MedicService.saveUsedInstruments();

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
