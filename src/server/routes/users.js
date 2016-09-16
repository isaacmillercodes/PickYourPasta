const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const knex = require('../db/knex');

router.get('/login', (req, res, next) => {
  res.render('users/login');
});

router.get('/signup', (req, res, next) => {
  res.render('users/signup');
});

router.post('/signup', (req, res, next) => {
  console.log('here');
  let password = req.body.password;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  knex('users')
  .insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash
  })
  .then((newUser) => {
    res.redirect('/restaurants');
  })
  .catch((err) => {
    res.status(404).send({
      status: 'Failed',
      message: err
    });
  });
});

module.exports = router;
