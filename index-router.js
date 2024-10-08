const express = require('express');
const messages = require('./messages');

const router = express.Router();
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages });
  next();
});

module.exports = router;
