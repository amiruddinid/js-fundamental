const express = require('express');
const router = express.Router();
const { get, getById, create, destroy } = 
    require('../app/controller/users')

router.get('/users', get)
router.get('/users/:id', getById)
router.post('/users', create)
router.delete('/users/:id', destroy)

module.exports = router;