const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const qr = require('node-qr-image');
const imagekit = require('../../../../utils/imagekit');

module.exports = {
    uploadImage: async (req, res) => {
        const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

        return res.status(200).json({
            status: true,
            message: 'success',
            data: {
                image_url: imageUrl
            }
        })
    },
    uploadDocument: async (req, res) => {
        const documentUrl = `${req.protocol}://${req.get('host')}/files/${req.file.filename}`

        return res.status(200).json({
            status: true,
            message: 'success',
            data: {
                image_url: documentUrl
            }
        })
    },
    uploadVideo: async (req, res) => {
        const videoUrl = `${req.protocol}://${req.get('host')}/files/${req.file.filename}`

        return res.status(200).json({
            status: true,
            message: 'success',
            data: {
                video_url: videoUrl
            }
        })
    },
    qrcode: async (req, res) => {
        const { text } = req.body;

        const qrCode = qr.image(text, { type: 'png' });
        res.setHeader("Content-Type", "image/png")
        qrCode.pipe(res);
    },
    imagekitUpload: async(req, res) => {
        try {
            // mengubah file menjadi string dengan encoding base64
            const stringFile = req.file.buffer.toString('base64'); 

            //process upload file ke imagekit
            const uploadFile = await imagekit.upload({
                fileName: req.file.originalname,
                file: stringFile
            })

            //mengembalikan response ke client
            return res.status(200).json({
                status: 'OK',
                message: 'Success',
                data: {
                    name: uploadFile.name,
                    url: uploadFile.url,
                    type: uploadFile.fileType
                }
            })
        } catch(err) {
            throw err;
        }
    }
}