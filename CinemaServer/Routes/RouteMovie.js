const MovieController = require('../Controller/MovieController');

var router = require('express').Router();

router.get('/', MovieController.GetMovie);
router.get('/detail', MovieController.GetMovieDetail);

module.exports = router;