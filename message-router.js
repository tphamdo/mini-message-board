const express = require('express');
const messages = require('./messages');

const router = express.Router();

router.get('/:messageId', (req, res, next) => {
  const messageId = req.params.messageId;
  console.log(req.params);
  console.log(messageId);
  console.log(messages);
  console.log(messages[messageId]);
  res.render('message', { message: messages[messageId] });
  next();
});

module.exports = router;
