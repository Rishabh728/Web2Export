const multer = require("multer");
const { HttpStatus } = require("../helper/statusCode");
const uuid = require("uuid").v4;
const path = require('path');
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

const upload = multer({
    storage,
    limits: {
        fileSize: process.env.POSTMEDIASIZE,
    },
}).array("media");

const fileUpload = (req, res, next) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            res.status(HttpStatus.FILE_UPLOAD_ERROR.code).send({
                success: false,
                msg: err.message,
            });
        } else if (err) {
            return res.status(HttpStatus.FILE_UPLOAD_ERROR.code).send({
                success: false,
                msg: err.message,
            });
        }
        console.log("next");
        next();
    });
};

module.exports = {fileUpload}