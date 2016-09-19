const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.put('employees/:id/edit', (req, res, next) => {
  const id = parseInt(req.params.id);
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const title = req.body.title;
  console.log('hello');
  knex('employees')
  .where('id', id)
  .update({
    first_name : first_name,
    last_name : last_name,
    title : title

  })
  .then(restaurant => {
    res.send('/restaurants/' + id);
  })
  .catch(error => {
    console.log(error);
  });

});

router.delete('employees/delete/:id', (req,res,next) => {
  console.log('here');
  const empId = parseInt(req.params.id);

  let deleteEmployee = knex('employees').where('id', empId).del();
  Promise.all([
    deleteEmployee
  ])
  .then((result) => {
    console.log('we did it');
    res.render('/restaurants');
  })
  .catch((err) => {
    console.log('we didn\'t do it');
    return next(err);

  });
});

module.exports = router;
