import MedicController from '../controllers/medicController';
import express from 'express';

const medicRouter = express.Router();

medicRouter.post('/stickerdetails', MedicController.getStickerDetails);
medicRouter.post('/saveusedinstruments', MedicController.saveUsedInstruments);

export default medicRouter;
