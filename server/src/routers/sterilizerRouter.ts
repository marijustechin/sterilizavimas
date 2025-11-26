import SterilizerController from '../controllers/sterilizerController.js';
import express from 'express';

const sterilizerRouter = express.Router();

sterilizerRouter.get('/', SterilizerController.getAll);
sterilizerRouter.delete('/:id', SterilizerController.delete);
sterilizerRouter.post('/', SterilizerController.create);
sterilizerRouter.patch('/', SterilizerController.patch);

export default sterilizerRouter;
