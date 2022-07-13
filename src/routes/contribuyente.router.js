const express = require("express");

const router = express.Router();

const {
  insertContribuyente,
  getContibruyenteFromAPI,
  getCaptcha,
  getSolicitudesByRuc,
} = require("../controllers/contribuyente.controller");

router.post("/insert_contribuyente", insertContribuyente);
router.get("/ruc/:ruc", getContibruyenteFromAPI);
router.get("/captcha", getCaptcha);
router.get("/solicitudes/:ruc", getSolicitudesByRuc);
module.exports = router;
