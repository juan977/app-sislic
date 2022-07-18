const express = require('express');

const router = express.Router();

const establecimientoPisosCtr = require('../controllers/establecimiento.pisos.controller');

router.get('/obtener_datos_pisos_establecimiento', establecimientoPisosCtr.obtener_datos_pisos_establecimiento);

router.delete('/delete_datos_pisos_establecimiento', establecimientoPisosCtr.DeletePisosEstablecimiento);

module.exports = router