const express = require("express");

const router = express.Router();

const {
  insertContribuyente,
  getContibruyenteFromAPI,
  getCaptcha,
} = require("../controllers/contribuyente.controller");

router.post("/insert_contribuyente", insertContribuyente);
router.get("/ruc/:ruc", getContibruyenteFromAPI);
router.get("/captcha", getCaptcha);
module.exports = router;
