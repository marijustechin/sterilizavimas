import { NextFunction, Request, Response } from 'express';
import SterilizationService from '../services/sterilizationService';

export default class SterilizationController {
  static async getCycleNumber(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { sterilizerId } = req.params;

      const cycleNumber = await SterilizationService.getCycleNumber(
        parseInt(sterilizerId)
      );

      res.status(200).json(cycleNumber);
    } catch (error) {
      next(error);
    }
  }
}
