(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    //route for users.js
    const userRoute = require('../routes/users');
    //route for restaurants.js
    const restaurantRoute = require('../routes/restaurants');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/users', userRoute);
    app.use('/restaurants', restaurantRoute);

  };

})(module.exports);
