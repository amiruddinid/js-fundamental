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

router.get('/v2/users', controller.usersV2.get)
router.get('/v2/users/:id', controller.usersV2.getById)
router.put('/v2/users/:id', controller.usersV2.update)
router.post('/v2/users', controller.usersV2.create)
router.delete('/v2/users/:id', controller.usersV2.destroy)

router.post('/v2/transfer', controller.transactionV2.transfer)

module.exports = router;