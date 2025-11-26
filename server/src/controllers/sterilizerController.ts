import { NextFunction, Request, Response } from 'express';
import SterilizerService from '../services/sterilizerService.js';

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

  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { sterilizer_code, sterilizer_name } = req.body;

      const newSterilzer = await SterilizerService.create({
        sterilizer_code: sterilizer_code,
        sterilizer_name: sterilizer_name,
      });

      res.status(200).json(newSterilzer);
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

      const deletedSterilizer = await SterilizerService.delete(Number(id));

      res.status(200).json(deletedSterilizer);
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
      const { id, sterilizer_code, sterilizer_name } = req.body;

      const updatedSterilizer = await SterilizerService.patch({
        id: id,
        sterilizer_code: sterilizer_code,
        sterilizer_name: sterilizer_name,
      });

      res.status(200).json(updatedSterilizer);
    } catch (error) {
      next(error);
    }
  }
}
