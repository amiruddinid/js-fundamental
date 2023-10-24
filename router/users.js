const express = require('express');
const router = express.Router();
// const { get, getById, create, destroy } = 
//     require('../app/controller/users')
const controller = require('../app/controller')

// router.get('/users', get)
// router.get('/users/:id', getById)
// router.post('/users', create)
// router.delete('/users/:id', destroy)

router.get('/users', controller.users.get)
router.get('/users/:id', controller.users.getById)
router.post('/users', controller.users.create)
router.delete('/users/:id', controller.users.destroy)

module.exports = router;