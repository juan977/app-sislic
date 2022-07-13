const express  = require('express') ;
const solicitudCtr = require('../controllers/solicitud.controller');

const router = express.Router();

router.post('/insert_Solicitud', solicitudCtr.insertSolicitud);

router.get('/obtener_lista_solicitud_pendientes_validados', solicitudCtr.obtener_lista_solicitudes_pendientes_validados);
router.get('/obtener_datos_solicitud_contribuyentes_establecimiento', solicitudCtr.obtener_datos_colicitud_contribuyentes_establecimiento)
router.get('/obtener_consultas_estado', solicitudCtr.obtener_consultas_estado)
router.get('/obtener_consultas_tasa', solicitudCtr.obtener_consultas_tasa)
router.get('/obtener_listas_solicitud_pago', solicitudCtr.obtener_listas_solicitud_con_pago)
router.get('/obtener_voucher_pago_nivelRiesgo_tasa', solicitudCtr.obtener_voucher_pago_nivelriesgo_tasa)
router.get('/obtener_pago_validado', solicitudCtr.obtener_pago_validado)
router.get('/obtener_datos_solicitud_contri_establecimiento', solicitudCtr.obtener_datos_solicitud_contri_establecimiento)
router.get('/obtene_lista_solicitud_pago_registrados', solicitudCtr.obtener_lista_solicitud_pago_registrados)
router.get('/obtener_lista_solicitud_pendiente_evaluarRiesgo', solicitudCtr.obtener_lista_solicitud_pendiente_evaluarRiesgo)

router.put('/modificar_actualizaciones_estado_solicitud', solicitudCtr.modificar_actualizaciones_estado_solicitud)
router.put('/modificar_actualizaciones_validados_estado_solicitud', solicitudCtr.modificar_actualizaciones_validados_estado_solicitud)
router.put('/modificar_registro_constancia_pago', solicitudCtr.modificar_registro_constancia_pago)
router.put('/modificar_estado_solicitud', solicitudCtr.modificar_estado_solicitud)
router.put('/modificar_solicitud_inspeccion', solicitudCtr.modificar_solicitud_inspeccion)

module.exports = router