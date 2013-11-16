
/*
 * GET a Shortcut.
 */

exports.get = function(req, res){
  var id = req.params.id;
  res.send('respond with a resource for id ' + id);
};

exports.retrieve = function(req, res){
  var id = req.params.id;
  res.json({
    url: 'http://www.google.com',
    shortcut: id
  });
};

/*
 * POST a new Shortcut.
 */

exports.post = function(req, res){
  var id = req.params.id;
  res.send('respond with a resource for id ' + id);
};
