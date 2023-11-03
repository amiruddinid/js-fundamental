const express = require('express');
const router = express.Router();
// const { get, getById, create, delete } = 
//     require('../app/controller/users')
const controller = require('../app/controller')
// router.get('/users', get)
// router.get('/users/:id', getById)
// router.post('/users', create)
// router.delete('/users/:id', destroy)

router.get('/users', controller.users.get)
router.get('/users/:id', controller.users.getById)
router.put('/users/:id', controller.users.update)
router.post('/users', controller.users.create)
router.delete('/users/:id', controller.users.destroy)

router.get('/api/v2/users', controller.usersV2.get)
router.get('/api/v2/users/:id', controller.usersV2.getById)
router.put('/api/v2/users/:id', controller.usersV2.update)
router.post('/api/v2/users', controller.usersV2.create)
router.delete('/api/v2/users/:id', controller.usersV2.destroy)

module.exports = router;