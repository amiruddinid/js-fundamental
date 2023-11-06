const express = require('express');
const router = express.Router();
const controller = require('../app/controller')
const { auth } = require('../utils/jwt');
//import passport dari utils
const passport = require('../utils/passport');

router.post('/api/v2/auth/login', controller.auth.login)
router.post('/api/v2/auth/register', controller.auth.register)
router.get('/api/v2/auth/whoami', auth, controller.auth.whoami)

//view
//register
router.get('/register', (req, res) => {
    res.render('register.ejs')
})
router.post('/register', controller.auth.registerForm)
//login
router.get('/login', (req, res) => {
    res.render('login.ejs')
})
// integrasikan passport ke router
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}))

module.exports = router;