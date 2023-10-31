const express = require('express')
const app = express()
const port = 3000
const routers = require('./router')
const swaggerJSON = require('./openapi.json')
const swaggerUI = require('swagger-ui-express')

//perlu ditambahkan sesuatu untuk bisa 
//menambahkan data
app.use(express.json())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))
app.use('/api', routers);

app.listen(port, () => 
    console
      .log(`Server run at http://localhost:${port}
    `))


// Buatlah 2 endpoint untuk users untuk 
// menambahkan data dan menghapus data
// dengan method dan endpoint yang sesuai
// waktu 20 menit