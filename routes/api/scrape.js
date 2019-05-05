var router = require("express").Router();
var scrapeController = require("../../controllers/scrape");

router.get("/", scrapeController.scrapeHeadlines);

module.exports = router;