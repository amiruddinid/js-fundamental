require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const flash = require('express-flash')
const session = require("express-session")
const routers = require('./router')
const swaggerJSON = require('./openapi.json')
const swaggerUI = require('swagger-ui-express')
const passport = require('./utils/passport');

//perlu ditambahkan sesuatu untuk bisa 
//menambahkan data
app.use(express.json()) //req.body untuk json
app.use(express.urlencoded({ extended:false })) //req.body untuk form data
app.use(session({ // config middleware session
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}))
app.use(flash()) // register flash middleware ke express -> req.flash
app.use(passport.initialize());
app.use(passport.session())

app.set("view engine", "ejs"); // register ejs sebagai view engine flash
app.set("views", path.join(__dirname, './app/view')) // mengubah folder views ke 
// app view

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))
app.use('/', routers);

app.listen(port, () => 
    console
      .log(`Server run at http://localhost:${port}
    `))

module.exports = app

// Buatlah 2 endpoint untuk users untuk 
// menambahkan data dan menghapus data
// dengan method dan endpoint yang sesuai
// waktu 20 menit