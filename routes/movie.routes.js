const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');


router.get('/', movieController.findAllMovies);

router.get('/', (req, res) => {
    req.query.status = 'PUBLISHED';
        movieController.findAllMovies(req, res);
});


router.get('/', (req, res) => {
    req.query.status = 'RELEASED';
      movieController.findAllMovies(req, res);
});

router.get('/movies/:movieId', movieController.findOne);


router.get('/', (req, res) => {
    const { status, title, genres, artists, start_date, end_date } = req.query;
    const queryParams = {};
      
});

module.exports = router;
