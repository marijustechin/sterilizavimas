import express from 'express';
import InstrumentController from '../controllers/instrumentController';

const instrumentRouter = express.Router();

instrumentRouter.get('/', InstrumentController.getAll);
instrumentRouter.delete('/:id', InstrumentController.delete);
instrumentRouter.patch('/', InstrumentController.patch);
instrumentRouter.post('/', InstrumentController.create);

export default instrumentRouter;
