var mongoose = require('mongoose');

var shortcutSchema = mongoose.Schema({
  url: String,
  shortcut: String
});

module.exports = mongoose.model('Shortcut', shortcutSchema);
