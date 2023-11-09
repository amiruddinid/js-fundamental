const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {
    upload: async (req, res) => {
        console.log(req.body)
        res.status(200).json({
            message: 'Berhasil Upload'
        })
    }
}