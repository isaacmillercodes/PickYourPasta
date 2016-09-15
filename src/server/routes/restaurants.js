const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('restaurants').select()
  .then((results) => {
    const renderObject = {};
    renderObject.restaurants = results;
    res.render('restaurants/restaurants',renderObject);
  });
});

router.get('/:id', (req,res,next) => {
  const id = parseInt(req.params.id);
  knex('restaurants').where('id', id)
  .then((results) => {
    const renderObject = {};
    renderObject.restaurants = results[0];
    console.log('a',renderObject.restaurants);
    res.render('restaurants/restaurant', renderObject);
  });
});

router.get('/new', (req, res, next) => {
  res.render('restaurants/new');
});

router.get('/edit', (req, res, next) => {
  res.render('restaurants/restaurant-edit');
});

router.delete('/delete/:id', (req,res,next) => {
  const id = parseInt(req.params.id);
  knex('restaurants')
  .del()
  .where('id',id)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status:'success',
        message: `${results[0].name} is gone!`
      });
    } else {
      res.status(404).json({
        status: 'error',
        message: 'this Id does not exist'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'errror',
      message: 'Something bad happened!'
    });
  });
});

module.exports = router;
