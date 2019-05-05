var headline = require("../models/Headline");
var note = require("../models/Note");


module.exports = {
  clearDB: function(req, res) {
    headline.remove({})
      .then(function() {
        return note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};
