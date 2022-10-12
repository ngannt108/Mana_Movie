const UserController = require('../Controller/UserController')
const router = require('express').Router();

router.post('/login', UserController.Login);
router.post('/register', UserController.Register);

module.exports = router;