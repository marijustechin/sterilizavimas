import SterilizationController from '../controllers/sterilizationControler';
import express from 'express';

const sterilizationRouter = express.Router();

sterilizationRouter.get(
  '/cycle-number/:sterilizerId',
  SterilizationController.getCycleNumber
);

export default sterilizationRouter;
