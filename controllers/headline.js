var headline = require("../models/Headline");

module.exports = {
  findAll: function(req, res) {
    headline
      .find(req.query)
      .sort({ date: -1 })
      .then(function(item) {
        res.json(item);
      });
  },
  delete: function(req, res) {
    headline.remove({ _id: req.params.id }).then(function(item) {
      res.json(item);
    });
  },
  update: function(req, res) {
    headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(item) {
      res.json(item);
    });
  }
};
