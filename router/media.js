const express = require('express');
const router = express.Router();
const storage = require('../utils/multer')
const controller = require('../app/controller')

router.get('/images', express.static('public/images'));

router.post('/api/v2/upload', 
        storage.image.single('image'),
        controller.media.uploadImage)

module.exports = router;