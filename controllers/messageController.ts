import { Request, Response } from 'express';
import * as db from '../db/queries';

export async function messageListGet(_req: Request, res: Response) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini Messageboard', messages });
}

export function newMessageGet(_req: Request, res: Response) {
  res.render('form');
}

export async function newMessagePost(req: Request, res: Response) {
  await db.insertMessage({
    message: req.body.message,
    username: req.body.username,
  });
  res.redirect('/');
}

export async function messageGet(req: Request, res: Response) {
  const messageId = parseInt(req.params.messageId);
  if (isNaN(messageId)) {
    res.redirect('/');
  } else {
    const message = await db.getMessage(messageId);
    res.render('message', { message });
  }
}
