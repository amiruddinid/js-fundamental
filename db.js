const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5433,
    database: 'blog',
    user: 'postgres',
    password: '1234',
})

async function connectDB(){
    await client.connect()
    //Buat query untuk menampilkan data di table yang sudah ada
    const res = await client.query(`
        SELECT * FROM users`,
    )
    console.log(res.rows[1].name)
    await client.end()
}

connectDB();