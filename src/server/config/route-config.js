(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    //route for users.js
    const userRoute = require('../routes/users');
    //route for restaurants.js
    const restaurantRoute = require('../routes/restaurants');
<<<<<<< HEAD
=======
    //route for reviews.js
    const reviewRoute = require('../routes/reviews');
>>>>>>> 89a665bcf6b7bb486da95f96c0c1731a4364d0fa

    // *** register routes *** //
    app.use('/', routes);
    app.use('/users', userRoute);
    app.use('/restaurants', restaurantRoute);
    app.use('/restaurants/:restID/reviews', reviewRoute);

  };

})(module.exports);
