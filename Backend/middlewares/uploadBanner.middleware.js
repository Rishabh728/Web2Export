const multer = require("multer");
const { HttpStatus } = require("../helper/statusCode");
const uuid = require("uuid").v4;


const ImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadLocation = 'uploads/banner';

        if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
            cb(null, uploadLocation);

        } else {
            return cb(new Error("File format is not allowed"));
        }

    },
    filename: async function (req, file, cb) {
        const { originalname } = file;
        const fileName = `${uuid()}-${originalname}`;
        cb(null, fileName);
    },
});


const uploadPageLogo = multer({
    storage: ImageStorage,
    limits: {
        fileSize: 1 * 1024 * 1024 * 20
    },
}).single('image')


const bannerUpload = (req, res, next) => {
    uploadPageLogo(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(HttpStatus.FILE_UPLOAD_ERROR.code).send({
                success: false,
                msg: err.message,
            });
        } else if (err) {
            return res.status(HttpStatus.FILE_UPLOAD_ERROR.code).send({
                success: false,
                msg: err.message,
            });
        }

        next();
    });
};


module.exports = {
    bannerUpload
};