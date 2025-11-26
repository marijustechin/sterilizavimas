import express from 'express';
import StickerController from '../controllers/stickerController.js';

const stickerRouter = express.Router();

stickerRouter.get('/', StickerController.getAll);
stickerRouter.post('/togglesuccess', StickerController.toggleStickerSuccess);

export default stickerRouter;
