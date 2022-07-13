const express  = require('express') ;

const router = express.Router();

const solicitudDocumentoCtr = require('../controllers/solicitud.documento.controller');


router.post('/insertSolicitud_Documentos', solicitudDocumentoCtr.insertSolicitud_Documentos);

router.get('/obtener_lista_documentos', solicitudDocumentoCtr.obtener_lista_Documentos);

router.put('/modificar_estado_documentos', solicitudDocumentoCtr.modificar_estado_Documentos);


router.get("/obtener_tipo_documentos", solicitudDocumentoCtr.obtener_tipo_documentos);
module.exports = router