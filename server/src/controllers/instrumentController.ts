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

  static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const deletedInstrument = await InstrumentService.delete(Number(id));

      res.status(200).json(deletedInstrument);
    } catch (error) {
      next(error);
    }
  }

  static async patch(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id, instrument_code, instrument_name, instrument_exp } = req.body;

      const updatedInstrument = await InstrumentService.patch({
        id: id,
        instrument_code: instrument_code,
        instrument_name: instrument_name,
        instrument_exp: instrument_exp,
      });

      res.status(200).json(updatedInstrument);
    } catch (error) {
      next(error);
    }
  }

  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { instrument_code, instrument_name, instrument_exp } = req.body;

      const newInstrument = await InstrumentService.create({
        instrument_code: instrument_code,
        instrument_name: instrument_name,
        instrument_exp: instrument_exp,
      });

      res.status(200).json(newInstrument);
    } catch (error) {
      next(error);
    }
  }
}
