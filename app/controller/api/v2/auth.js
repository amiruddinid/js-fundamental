const { PrismaClient } = require('@prisma/client')
const { encryptPassword, checkPassword } = 
    require('../../../../utils/auth')

const prisma = new PrismaClient();

module.exports = {
    async login(req, res){
        const {email, password} = req.body;

        const user = await prisma.user.findFirst({
            where: { email }
        })

        if(!user){
            return res.status(404).json({
                status: "Fail!",
                message: "Email tidak ditemukan!"
            })
        }

        const isPasswordCorrect = await checkPassword(
            password, user.password
        )

        if(!isPasswordCorrect){
            return res.status(401).json({
                status: "Fail!",
                message: "Password Salah!"
            })
        }

        return res.status(201).json({
            status: "Success!",
            message: "Berhasil Login!",
            data: user 
        })
    },
    async register(req, res){
        //coba buat fungsi register dengan menganti password 
        //dari req.body dengan password yang sudah terinkripsi
    }
}