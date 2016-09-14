const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('restaurants').select()
  .then((results) => {
    const renderObject = {};
    renderObject.restaurants = results;
    res.rener('restaurants',renderObject);
  });
});

router.get('/:id', (req,res,next) => {
  id = req.params.id;
  knex('restaurants').select()
})


router.get('/new', (req, res, next) => {
  res.render('restaurants/new');
});

router.get('/edit', (req, res, next) => {
  res.render('restaurants/restaurant-edit');
});


module.exports = router;
