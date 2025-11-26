import express from 'express';
import InstrumentController from '../controllers/instrumentController.js';

const instrumentRouter = express.Router();

instrumentRouter.get('/', InstrumentController.getAll);
instrumentRouter.delete('/:id', InstrumentController.delete);
instrumentRouter.patch('/', InstrumentController.patch);
instrumentRouter.post('/', InstrumentController.create);
instrumentRouter.post('/lookup', InstrumentController.lookupInstrument);
instrumentRouter.post('/usage', InstrumentController.saveUsedInstruments);

export default instrumentRouter;
