var router = require("express").Router();
var scrapeRoutes = require("./scrape");
var noteRoutes = require("./notes");
var headlineRoutes = require("./headlines");
var clearRoutes = require("./clear");

router.use("/scrape", scrapeRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);
router.use("/clear", clearRoutes);

module.exports = router;