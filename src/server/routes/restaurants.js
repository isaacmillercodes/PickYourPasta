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


module.exports = router;


router.get('/authors',(req, res, next) => {
  knex('authors').select()
  .then((results) => {
    const renderObject = {};
    renderObject.title = 'Here be Authors!';
    renderObject.authors = results;
    console.log(renderObject);
    res.render('authors', renderObject);
  })
  .catch((err) => {
    return next(err);
  });
});

router.get('/authors/:id', (req,res,next) => {
  let id = req.params.id;
  knex('authors').where('id',id)
  .select()
  .then((results) => {
    const renderObject = {};
    renderObject.title = 'Single Book Here';
    renderObject.authors = results;
    res.render('authors.html', renderObject);
  });
});

router.post('/newAuthor', (req,res,next) => {
  const name = req.body.name;
  const booksWritten = req.body.booksWritten;
  const biography = req.body.biography;
  const headshot = req.body.headshot;
  const genre = req.body.genre;
  knex('authors').insert({
    booksWritten:booksWritten,
    headshot:headshot,
    name:name,
    genre:genre,
    biography:biography
  })
  .then((results) => {
    res.redirect('/authors');
  })
  .catch((err) => {
    return next('hey');
  });
});

router.delete('/authors/delete/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  console.log('here');
  knex('authors')
  .del()
  .where('id', id)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status: 'success',
        message: `${results[0].id} is gone!`
      });
    } else {
      res.status(404).json({
        status: 'errror',
        message: 'we are here'
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
