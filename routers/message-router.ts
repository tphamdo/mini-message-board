import express from 'express';
import * as messageController from '../controllers/messageController';

const router = express.Router();

router.get('/', messageController.messageListGet);

router.get('/new', messageController.newMessageGet);

router.post('/new', messageController.newMessagePost);

router.get('/message/:messageId', messageController.messageGet);

export default router;
