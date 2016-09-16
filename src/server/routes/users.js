const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const knex = require('../db/knex');
const salt = bcrypt.genSaltSync(10);

router.get('/login', (req, res, next) => {
  res.render('users/login');
});

router.get('/signup', (req, res, next) => {
  res.render('users/signup');
});

router.post('/signup', (req, res, next) => {
  let password = req.body.password;
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

router.post('/login', (req, res, next) => {
  let userEmail = req.body.email;
  let password = req.body.password;
  let msg;
  if (!userEmail || !password) {
    msg = { message: 'Must enter both username and password' };
  } else {
    knex('users')
    .then((users) => {
      let user = users.filter((user) => user.email === userEmail)[0];
      console.log(user);
      if (!user) {
        msg = { message: 'Incorrect username or password.'};
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.user = user;
          msg = user;
        } else {
          msg = { message: 'Nope, something went wrong.' };
        }
      }
    })
    .catch((err) => {
      console.log(err);
      // res.status(418).send(err);
    });
  }
  let result = JSON.stringify(msg);
  console.log(result);
  res.render('restaurants/restaurants', result);
});

module.exports = router;
