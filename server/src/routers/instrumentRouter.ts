import InstrumentController from '../controllers/instrumentController';
import express from 'express';

const instrumentRouter = express.Router();

instrumentRouter.get('/', InstrumentController.getAll);
instrumentRouter.delete('/:id', InstrumentController.delete);
instrumentRouter.patch('/', InstrumentController.patch);
instrumentRouter.post('/', InstrumentController.create);

export default instrumentRouter;
