const express  = require('express') ;
const inspeccionCtr = require('../controllers/inspeccion.controller');

const router = express.Router();

router.post('/insertInspeccion', inspeccionCtr.insertInspeccion);

module.exports = router