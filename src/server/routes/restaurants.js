const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  let getRest = knex('restaurants').select().orderBy('id','desc');
  let findAve = knex.raw('select restaurants.id , avg(reviews.rating) from restaurants , reviews where restaurants.id = reviews.rest_id group by restaurants.id;');
  Promise.all([
    findAve,
    getRest
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.restaurants = results[1];
    renderObject.averages = results[0].rows;
    res.render('restaurants/restaurants',renderObject);
  });
});

router.get('/:id', (req,res,next) => {
  const id = parseInt(req.params.id);
  let findRestaurant = knex('restaurants').where('restaurants.id', id).first();
  let findReviews = knex('reviews').where('reviews.rest_id', id);
  let findUsers = knex('reviews').where('reviews.rest_id', id).join('users', 'users.id', 'reviews.user_id').select('users.id', 'users.first_name', 'users.last_name');
  let getEmployees = knex('employees').where('employees.rest_id',id);
  Promise.all([
    findRestaurant,
    findReviews,
    findUsers,
    getEmployees
  ])
  .then((results) => {
    const renderObject = {};
    let restRating = 0;
    console.log(results[3]);
    renderObject.restaurants = results[0];
    renderObject.reviews = results[1];
    renderObject.users = results[2];
    renderObject.employees = results[3];
    let indRatings = results[1];
    let avgRate = 0;
    let finAve = 0;
    indRatings.forEach((rate) => {
        avgRate += indRatings.rating;
      });
       finAve = parseFloat(avgRate / indRatings.length);
    renderObject.avg = finAve;
    renderObject.alreadyReviewed = false;
    if (req.session.user) {
      results[2].forEach(user => {
        if (user.id === req.session.user.id) {
          renderObject.alreadyReviewed = true;
        }
      });
    }

    res.render('restaurants/restaurant', renderObject);
  });
});

router.get('/new', (req, res, next) => {
  res.render('restaurants/new');
});

router.get('/:id/edit', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('restaurants').where('restaurants.id', id)
  .then(results => {
    const renderObject = {};
    renderObject.restaurant = results[0];
    res.render('restaurants/restaurant-edit', renderObject);
  });
});

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

  let deleteReviews = knex('reviews').where('rest_id', restID).del();
  let deleteRestaurant = knex('restaurants').where('id', restID).del();
  Promise.all([
    deleteReviews,
    deleteRestaurant
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





module.exports = router;
