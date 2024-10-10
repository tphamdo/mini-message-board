import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import messageRouter from './routers/message-router';

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', messageRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Starting server at localhost:${PORT}`);
});
