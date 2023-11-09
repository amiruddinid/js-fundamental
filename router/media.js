const express = require('express');
const router = express.Router();
const storage = require('../utils/multer')
const controller = require('../app/controller')

router.get('/images', express.static('public/images'));
router.get('/files', express.static('public/files'));

router.post('/api/v2/upload/image', 
        storage.image.single('image'),
        controller.media.uploadImage)
router.post('/api/v2/upload/video', 
        storage.image.single('video'),
        controller.media.uploadVideo)
router.post('/api/v2/upload/documents', 
        storage.image.single('doc'),
        controller.media.uploadDocument)

module.exports = router;