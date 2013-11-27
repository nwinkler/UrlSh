var mongoose = require('mongoose');

var shortcutSchema = mongoose.Schema({
  url: String,
  shortcut: String
});

mongoose.model('Shortcut', shortcutSchema);
