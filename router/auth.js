const express = require('express');
const router = express.Router();
const controller = require('../app/controller');
const { auth } = require('../utils/jwt');
//import passport dari utils
const passport = require('../utils/passport');
const passportOAUTH = require('../utils/oauth');

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

router.get('/auth/google', 
    passportOAUTH.authenticate('google', {
        scope: ['profile', 'email']
    })
)
router.get('/auth/google/callback', 
    passportOAUTH.authenticate('google', {
        failureRedirect: '/login',
        session: false
    }), controller.auth.oauth
)

// const passportOAUTH = require('../utils/oauth');

module.exports = router;