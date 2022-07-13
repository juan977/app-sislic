require('dotenv').config()
const { Router } = require('express')

const router = new Router();

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const uploadimage = multer({
    storage,
    limits: { fileSize: 1000000}
}).single('image');

router.post('/images/upload', (req, res) => {
    uploadimage(req, res, (err) => {
        if (err) {
            err.message = 'Error al subir el archivo'
            return res.send(err);
        }
        console.log(req.file)
        res.send(process.env.URL_FILE + 
            "/upload/" + req.file.originalname);
    });
});

router.get('/', (req,res) => {
    res.send({"response":"Funciona correctamente"});
});

module.exports = router;