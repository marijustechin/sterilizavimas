import SterilizerController from '../controllers/sterilizerController';
import express from 'express';

const sterilizerRouter = express.Router();

sterilizerRouter.get('/', SterilizerController.getAll);

export default sterilizerRouter;
