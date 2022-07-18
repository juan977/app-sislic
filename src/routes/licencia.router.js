const express = require('express');

const router = express.Router();

const licenciaCtr = require('../controllers/licencia.controller');

router.get('/obtenerlicencias', licenciaCtr.ObtenerLicencias);

module.exports = router