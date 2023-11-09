const express = require('express');
const router = express.Router();

const controller = require('../app/controller')

router.post('/api/v2/upload', controller.media.upload)

module.exports = router;