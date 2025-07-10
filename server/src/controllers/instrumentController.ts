import { NextFunction, Request, Response } from 'express';
import InstrumentService from '../services/instrumentService';

export default class InstrumentController {
  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const instrumentai = await InstrumentService.getAll();
      res.status(200).json(instrumentai);
    } catch (error) {
      next(error);
    }
  }
}
