const CinemaController = require('../Controller/CinemaController');
var router = require('express').Router();

router.get('/', CinemaController.GetCinema);
router.get('/branch', CinemaController.GetListBranch);
router.get('/branch/schedule', CinemaController.GetSchedule)

module.exports = router;