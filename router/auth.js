const express = require('express');
const router = express.Router();
const controller = require('../app/controller')

router.post('/api/v2/auth/login', controller.auth.login)
router.post('/api/v2/auth/register', controller.auth.register)

//view
router.get('/register', (req, res) => {
    res.render('register.ejs')
})
router.post('/register', controller.auth.registerForm)

module.exports = router;