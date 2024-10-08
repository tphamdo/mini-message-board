const express = require('express');
const path = require('path');
const indexRouter = require('./index-router');
const formRouter = require('./form-router');
const messageRouter = require('./message-router');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/new', formRouter);
app.use('/message', messageRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Starting server at localhost:${PORT}`);
});
