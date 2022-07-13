const { Router } = require("express");

const imgRouter = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

imgRouter.post("/single", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
  res.json({
    status: "hola",
  });
});

module.exports = imgRouter;
