const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../db/knex');

router.get('/new', (req, res, next) => {
  const restID = parseInt(req.params.restID);
  const userID = parseInt(req.params.userID);

  let getRestaurant = knex('restaurants').where('id', restID).first();

  let getUser = knex('users').where('id', userID).first();

  Promise.all([
    getRestaurant,
    getUser
  ])
  .then(results => {
    const renderObject = {
      restaurant: results[0],
      user: results[1]
    };
    res.render('restaurants/reviews/add-review', renderObject);
  });
});

router.post('/new', (req, res, next) => {
  const restID = parseInt(req.params.restID);
  const userID = parseInt(req.params.userID);
  const review = req.body.reviewText;
  const rating = req.body.ratingOptions;

  console.log(restID, userID, review, rating);

  knex('reviews').insert({rest_id: restID, user_id: userID, review: review, rating: rating})
  .then(review => {

    res.redirect('/restaurants/' + restID);

  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/edit', (req, res, next) => {
  const restID = parseInt(req.params.restID);
  const userID = parseInt(req.params.userID);

  let getRestaurant = knex('restaurants').where('id', restID).first();

  let getUser = knex('users').where('id', userID).first();

  let getReview = knex('reviews').where({
    rest_id: restID,
    user_id:  userID
  }).first();

  Promise.all([
    getRestaurant,
    getUser,
    getReview
  ])
  .then(results => {
    console.log(results);
    const renderObject = {
      restaurant: results[0],
      user: results[1],
      review: results[2]
    };
    res.render('restaurants/reviews/edit-review', renderObject);
  });
});

router.put('/edit', (req, res, next) => {
  const restID = parseInt(req.params.restID);
  const userID = parseInt(req.params.userID);
  const review = req.body.review;
  const rating = req.body.rating;

  knex('reviews').where({
    rest_id: restID,
    user_id:  userID
  })
  .update({rest_id: restID, user_id: userID, review: review, rating: rating})
  .then(review => {

    res.send('/restaurants/' + restID);

  })
  .catch((error) => {
    console.log(error);
  });
});

router.delete('/delete', (req, res, next) => {
  const restID = parseInt(req.params.restID);
  const userID = parseInt(req.params.userID);

  knex('reviews').where({
    rest_id: restID,
    user_id: userID
  })
  .del()
  .then((result) => {
    res.send('/restaurants/' + restID);
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
