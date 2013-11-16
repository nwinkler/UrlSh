
var Shortcut = require('../models/shortcut');

/*
 * GET a Shortcut.
 */

exports.get = function(req, res){
  var id = req.params.id;
  res.send('respond with a resource for id ' + id);
};

exports.retrieve = function(req, res){
  var id = req.params.id;

  Shortcut.findOne({shortcut: id}, function(errors, shortcut) {
    console.log(errors, shortcut);

    res.json(shortcut);
  });
};

/*
 * POST a new Shortcut.
 */

exports.post = function(req, res){
  var newShortcutUrl = req.body.url;

  if (newShortcutUrl) {
    new Shortcut({
      url: newShortcutUrl,
      shortcut: '1234'
    }).save(function(errors, newShortcut) {
      res.json(newShortcut);
    });
  }
  else {
    res.send(422, { errors: { url: ['Empty URL not allowed.'] }});
  }
};
