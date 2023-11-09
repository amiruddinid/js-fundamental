const multer = require('multer');
const path = require('path');

const filename = (req, file, callback) => {
    const fileName = Date.now() + path.extname(file.originalname);
    callback(null, fileName);
}

const generateStorage = (destination) => {
    return multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, destination)
        },
        filename
    })
}

module.exports = {
    image: multer({
        storage: generateStorage('./public/images'),
        fileFilter: (req, file, callback) => {
            const allowedMimeType = ['image/jpeg', 'image/jpg', 'image/png']

            if(allowedMimeType.includes(file.mimetype)){
                callback(null, null)
            } else {
                const err = new Error(`Only ${allowedMimeType.join(', ')} allowed to upload`)
                callback(err, null)
            }   
        },
        onError: (err, next) => {
            next(err);
        }
    })
}