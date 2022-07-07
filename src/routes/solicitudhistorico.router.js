const express  = require('express') ;
const solicitudhistoricoCtr = require('../controllers/solicitudhistorico.controller');

const router = express.Router();

router.post('/insert_Solicitud_historico', solicitudhistoricoCtr.insertSolicitud_Historico);
//router.post('/insertRegistro_solicitud_historico', solicitudhistoricoCtr.insertRegistro_solicitud_Historico);
//router.post('/insertRegistro_historico_solicitudes', solicitudhistoricoCtr.insertRegistro_Historico_Solicitudes);
//router.post('/insertRegistro_operacion_historico_solicitudes', solicitudhistoricoCtr.insertRegistro_operacion_Historico_Solicitudes);

module.exports = router