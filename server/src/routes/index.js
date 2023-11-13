const { Router } = require("express");

const driversRoute = require("./driversRoute.js");
//const teamsRoute = require("./teamsRoute.js");


const router = Router();

module.exports = router;

router.use("/drivers", driversRoute);
//router.use("/teams", teamsRoute);

module.exports = router;