import PrinterController from '../controllers/printerController.js';
import express from 'express';

const printerRouter = express.Router();

printerRouter.get('/', PrinterController.getAll);
printerRouter.delete('/:id', PrinterController.delete);
printerRouter.post('/toggle/:id', PrinterController.toggleIsActivePrinter);
printerRouter.post('/', PrinterController.create);
printerRouter.patch('/', PrinterController.patch);

export default printerRouter;
