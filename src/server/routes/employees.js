const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.put('/:id/edit', (req, res, next) => {
  const restId = parseInt(req.params.id);
  const name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;
  const cuisine = req.body.cuisine;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  console.log('hello');
  knex('restaurants')
  .where('restaurants.id', restId)
  .update({
    name: name,
    city: city,
    state: state,
    cuisine: cuisine,
    description: description,
    image_url: imageUrl
  })
  .then(restaurant => {
    res.send('/restaurants/' + restId);
  })
  .catch(error => {
    console.log(error);
  });

});

router.delete('/delete/:id', (req,res,next) => {
  console.log('here');
  const restID = parseInt(req.params.id);

  let deleteEmployee = knex('reviews').where('rest_id', restID).del();
  Promise.all([
    deleteEmployee
  ])
  .then((result) => {
    console.log('we did it');
    res.send('/restaurants');
  })
  .catch((err) => {
    console.log('we didn\'t do it');
    return next(err);

  });
});
