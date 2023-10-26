const pool = require('../../config/db');

module.exports = {
    async get(search = null, page = 1, limit = 10){
        const result = await pool.query(
            `SELECT * FROM users
             WHERE 
                ($1::text is null or name like $1) or
                ($1::text is null or email like $1)
             LIMIT $2
             OFFSET $3
            `, 
            [`%${search}%`, limit, (page - 1) * limit]
        )
        return result.rows
    },
    async getById(id){
        const result = await query(
            "SELECT * FROM users WHERE id=$1", [id]
        )
        return result.rows
    },
    async create(){
        const result = await query(
            "INSERT INTO"
        )
    },
    async update(){

    },
    async delete(){

    }
}