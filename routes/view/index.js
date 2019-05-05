var router = require("express").Router();
var headline = require("../../models/Headline")

// This route renders the homepage
router.get("/", function(req, res) {
  headline.find({ saved: false })
    .sort({ date: -1 })
    .then(function(item) {
      res.render("home", { articles: item });
    });
});

// This route renders the saved handlebars page
router.get("/saved", function(req, res) {
  headline.find({ saved: true })
    .sort({ date: -1 })
    .then(function(item) {
      res.render("saved", { articles: item });
    });
});

module.exports = router;
