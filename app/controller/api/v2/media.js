const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {
    uploadImage: async (req, res) => {
        console.log(req.file)
        const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

        return res.status(200).json({
            status: true,
            message: 'success',
            data: {
                image_url: imageUrl
            }
        })
    }
}