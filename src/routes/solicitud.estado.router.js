const express = require('express');

const router = express.Router();

const solicitudEstadoCtr = require('../controllers/solicitud.estado.controller');

router.get(
    "/obtener_consultas_estado", 
    solicitudEstadoCtr.obtener_consultas_estado);

router.put(
    "/modificar_actualizaciones_estado_solicitud",
    solicitudEstadoCtr.modificar_actualizaciones_estado_solicitud);

router.put(
    "/modificar_actualizaciones_validados_estado_solicitud",
    solicitudEstadoCtr.modificar_actualizaciones_validados_estado_solicitud);

router.put(
    "/modificar_estado_solicitud",
    solicitudEstadoCtr.modificar_estado_solicitud);

router.exports = router