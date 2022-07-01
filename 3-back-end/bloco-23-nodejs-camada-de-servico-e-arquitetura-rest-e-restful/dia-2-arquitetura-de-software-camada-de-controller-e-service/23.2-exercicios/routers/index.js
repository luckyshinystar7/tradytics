const express = require('express');

const router = express.Router();

const userRouters = require('../controllers/User');

router.use('/user', userRouters);

module.exports = router;