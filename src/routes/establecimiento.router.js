const express  = require('express') ;

const router = express.Router();

const establecimientoCtrl = require('../controllers/establecimiento.controller');

router.post('/insertar_establecimiento', establecimientoCtrl.insertEstablecimiento);
router.post('/insert_actividades_establecimiento', establecimientoCtrl.insert_actividades_de_establecimiento);

router.get('/obtener_datos_actividades_establecimiento', establecimientoCtrl.obtener_datos_de_actividad_de_establecimiento);
router.get('/obtener_datos_establecimiento', establecimientoCtrl.obtener_datos_Establecimiento);


module.exports = router