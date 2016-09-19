const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../db/knex');

router.get('/edit', (req, res, next) => {
  const restID = parseInt(req.params.restID);
  const empID = parseInt(req.params.empID);

  console.log(restID);
  console.log(empID);

  knex('employees')
  .where({
    id: empID,
    rest_id: restID
  })
  .first()
  .then(results => {
    const renderObject = {
      employee: results
    };
    console.log(renderObject.employee);
    res.render('restaurants/employees/edit', renderObject);
  });
});

router.put('/edit', (req, res, next) => {
  const restID = parseInt(req.params.restID);
  const empID = parseInt(req.params.empID);
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const title = req.body.title;
  knex('employees')
  .where('employees.id', empID)
  .update({
    first_name: first_name,
    last_name: last_name,
    title: title
  })
  .then(employee => {
    res.send('/restaurants/' + restID);
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
