const { Router } = require("express");
const router = Router();
const {
  getDriversHandler,
  getDriversIdHandler } = require("../handlers/driversHandler");

router.get("/", getDriversHandler);

router.get("/:idDriver", getDriversIdHandler);

module.exports = router;
