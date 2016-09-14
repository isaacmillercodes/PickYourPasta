const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('users/login');
});

router.get('/signup', (req, res, next) => {
  res.render('users/signup');
});

module.exports = router;
