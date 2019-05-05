var headline = require("../models/Headline");
var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
  return axios.get("https://www.theonion.com/").then(function(res) {
    var $ = cheerio.load(res.data);
    var articles = [];
    $("div.content-wrapper").each(function(i, element) {
      var headline = $(this)
        .find("a")
        .text()
        .trim();

      var url = $(this)
        .find("a")
        .attr("href");

      if (headline && url) {

        var article = {
          headline: headline,
          url: url
        };

        articles.push(article);
      }
    });
    return articles;
  });
};

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(headlines) {
        return headline.create(headlines);
      })
      .then(function(dbheadlines) {
        if (dbheadlines.length === 0) {
          res.json({
            message: "No new articles today. Check back tomorrow!"
          });
        }
        else {
          res.json({
            message: "Added " + dbheadlines.length + " new articles!"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
