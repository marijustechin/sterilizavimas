import InstrumentController from '../controllers/instrumentController';
import express from 'express';

const instrumentRouter = express.Router();

instrumentRouter.get('/', InstrumentController.getAll);

export default instrumentRouter;
