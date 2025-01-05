const multer = require("multer");
const { HttpStatus } = require("../helper/statusCode");
const uuid = require("uuid").v4;
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadLocation
        if (req.baseUrl === "/post/media") {
            uploadLocation = `uploads/post/`;
        } else {
            uploadLocation = `uploads${req.baseUrl}`;
        }
        console.log("file", file);
        if (
            !file.mimetype.includes("image") &&
            !file.mimetype.includes("video")
        ) {
            return cb(new Error("File format doesn't supported"));
        }
        cb(null, uploadLocation);

    },
    filename: async function (req, file, cb) {
        const { originalname } = file;
        const fileName = `${uuid()}${path.extname(originalname)}`;
        cb(null, fileName);
    },
});

const pageImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadLocation = 'uploads/users';

        if (file.mimetype.includes("image")) {
            cb(null, uploadLocation);

        } else {
            return cb(new Error("File format is not allowed"));
        }

    },
    filename: async function (req, file, cb) {
        const { originalname } = file;
        const fileName = `${uuid()}${path.extname(originalname)}`;
        cb(null, fileName);
    },
});

const uploadProfileImg = multer({
    storage: pageImageStorage,
    limits: {
        fileSize: 1 * 1024 * 1024 * 20
    },
}).fields([{ name: 'profile_img' }, { name: 'company_img' }])

const profileImages = (req, res, next) => {
    uploadProfileImg(req, res, (err) => {
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







module.exports = { profileImages }