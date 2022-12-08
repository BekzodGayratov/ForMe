const express = require('express');
const router = express.Router();
const login = require('../controllers/auth/login_controller');

/* GET users listing. */
router.get('/login', login);

module.exports = router;
