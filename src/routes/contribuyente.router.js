const express  = require('express') ;

const router = express.Router();

const contribuyenteCtr = require('../controllers/contribuyente.controller');

router.post('/insert_contribuyente', contribuyenteCtr.insertContribuyente);

module.exports = router