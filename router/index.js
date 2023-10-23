const express = require('express');
const router = express.Router();

const users = require('./users');

router.use(users);
// router.use()

module.exports = router;