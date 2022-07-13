const express  = require('express') ;
const solicitudhistoricoCtr = require('../controllers/solicitudhistorico.controller');

const router = express.Router();

router.post('/insert_Solicitud_historico', solicitudhistoricoCtr.insertSolicitud_Historico);

module.exports = router