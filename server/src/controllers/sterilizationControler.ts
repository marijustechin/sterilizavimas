import { NextFunction, Request, Response } from 'express';
import SterilizationService from '../services/sterilizationService';
import { TSterilizationCyclePayload } from 'types';

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

  static async saveSterilizationCycle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const sterilizationCycleData: TSterilizationCyclePayload = req.body;

      const result = await SterilizationService.saveSterilizationCycle(
        sterilizationCycleData
      );

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}
