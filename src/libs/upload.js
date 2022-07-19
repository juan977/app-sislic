require('dotenv').config()
const { Router } = require('express');
const router = new Router();

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploadVoucher = multer({
    storage,
    limits: { fileSize: 1000000 }
}).single('voucher');

module.exports = {uploadVoucher};