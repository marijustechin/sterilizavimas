import { NextFunction, Request, Response } from 'express';
import SterilizerService from '../services/sterilizerService';

export default class SterilizerController {
  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const sterilizatoriai = await SterilizerService.getAll();
      res.status(200).json(sterilizatoriai);
    } catch (error) {
      next(error);
    }
  }
}
