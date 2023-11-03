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
                message: "User tidak ditemukan!"
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
        const {email, password, name} = req.body;
        const user = await prisma.user.findFirst({
            where: { email }
        })

        if(user){
            return res.status(404).json({
                status: "Fail!",
                message: "Email sudah terdaftar!"
            })
        }

        const createUser = await prisma.user.create({
            data: {
                email,
                name,
                password: await encryptPassword(password)
            }
        });

        return res.status(201).json({ 
            status: 'success', 
            code: 200, 
            message: 'Berhasil Register',
            data: createUser
        })
    },
    registerForm: async (req, res, next) => {
        try{
            const {email, password, name} = req.body;
            console.log(req.body);
            const user = await prisma.user.findFirst({
                where: { email }
            })

            if(user){
                req.flash("error", "Email sudah terdaftar!")
                return res.redirect('/register')
            }

            const createUser = await prisma.user.create({
                data: {
                    email,
                    name,
                    password: await encryptPassword(password)
                }
            });

            req.flash("success", "Berhasil Register!")
            return res.redirect('/login')
        }catch(e){
            next(e) // untuk mengirim error ke middleware dan ditampilkan di ejs
        }
    }
}