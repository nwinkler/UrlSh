var mongoose = require('mongoose');
var Shortcut = require('../models/shortcut');

mongoose.connect('mongodb://localhost/urlsh');

var testShortcut = 'TEST_SHORTCUT';
var testUrl = 'http://test.urlsh/test';

// First remove all test items
var query = Shortcut.remove({ url: testUrl });
query.exec();

// Then create a single test entry
new Shortcut({
  url: testUrl,
  shortcut: testShortcut
}).save();

mongoose.disconnect();
