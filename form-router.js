const express = require('express');
const messages = require('./messages');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('form');
  next();
});

router.post('/', (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
