const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { authUser } = require('../app/controller/api/v2/auth')

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async(id, done) => {
    done(null, await prisma.user.findUnique({ where: {id}}))
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, authUser))

module.exports = passport;
/*
passport.serializeUser((user, done) => done(null, user.id));

Ini adalah konfigurasi Passport.js untuk serialisasi pengguna. 
Ketika pengguna berhasil masuk, fungsi ini mengambil objek pengguna (user) dan 
hanya menyimpan ID pengguna dalam sesi. Ini memungkinkan Passport untuk 
mengenal pengguna secara unik di setiap permintaan selanjutnya.

passport.deserializeUser(async (id, done) => { ... });

Ini adalah konfigurasi Passport.js untuk deserialisasi pengguna. 
Ketika pengguna membuat permintaan, 
Passport akan menggunakan ID pengguna yang disimpan dalam sesi untuk
mengambil informasi lengkap pengguna dari database menggunakan Prisma. 
Fungsi ini mengambil ID pengguna dari sesi, 
kemudian mencari pengguna dengan ID tersebut dalam database 
Prisma menggunakan prisma.user.findUnique().

passport.use(new LocalStrategy({ ... }, authUser))

Ini adalah pengaturan strategi lokal Passport. 
Strategi ini digunakan untuk mengotentikasi pengguna berdasarkan email dan 
password. Dalam kode ini, usernameField disetel sebagai 'email' dan 
passwordField sebagai 'password'. Autentikasi pengguna dilakukan 
dengan menggunakan fungsi authUser yang diimpor dari modul 'auth'. 
Strategi ini akan memeriksa apakah email dan password yang 
diberikan oleh pengguna sesuai dengan yang ada dalam database.
*/
