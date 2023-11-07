const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} = process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
    async function(accessToken, refreshToken, profile, done){
        console.log(profile)
        try{
            let user = await prisma.user.upsert({
                where: { email: profile.emails[0].value },
                update: { googleId: profile.id },
                create: {
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                }
            })

            done(null, user)
        } catch(err) {
            done(err, null)
        }
    }
))

module.exports = passport