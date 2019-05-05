var note = require("../models/Note");

module.exports = {
  find: function(req, res) {
    note.find({ _headlineId: req.params.id }).then(function(item) {
      res.json(item);
    });
  },
  create: function(req, res) {
    note.create(req.body).then(function(item) {
      res.json(item);
    });
  },
  delete: function(req, res) {
    note.remove({ _id: req.params.id }).then(function(item) {
      res.json(item);
    });
  }
};
