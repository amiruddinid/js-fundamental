const express = require('express');
const router = express.Router();

const users = require('./users');
const auth = require('./auth');
const media = require('./media');

router.use(users);
router.use(auth);
router.use(media);

module.exports = router;