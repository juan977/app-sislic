const express  = require('express') ;
const ActividadEconomicaCtr = require('../controllers/actividad.economica.controller');

const router = express.Router();

router.get('/obtener_actividad_economico', ActividadEconomicaCtr.obtener_lista_actividad_economico);

module.exports = router