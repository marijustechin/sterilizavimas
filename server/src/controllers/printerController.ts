import { NextFunction, Request, Response } from 'express';
import PrinterService from '../services/printerService';

export default class PrinterController {
  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const printers = await PrinterService.getAll();
      res.status(200).json(printers);
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
      const { name, ip_address, port } = req.body;

      const newSterilzer = await PrinterService.create(name, ip_address, port);

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

      const deletedSterilizer = await PrinterService.delete(Number(id));

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
      const { id, name, port, ip_address } = req.body;

      const updatedPrinter = await PrinterService.patch(
        id,
        name,
        port,
        ip_address
      );

      res.status(200).json(updatedPrinter);
    } catch (error) {
      next(error);
    }
  }

  static async toggleIsActivePrinter(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const isActive = await PrinterService.toggleIsActivePrinter(Number(id));

      res.status(200).json(isActive);
    } catch (error) {
      next(error);
    }
  }
}
