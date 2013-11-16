
/*
 * GET a URL.
 */

exports.get = function(req, res){
  var id = req.params.id;
  res.send('respond with a resource for id ' + id);
};

exports.retrieve = function(req, res){
  var id = req.params.id;
  res.json({
    url: 'http://www.google.com',
    short: id
  });
};

/*
 * POST a new URL.
 */

exports.post = function(req, res){
  var id = req.params.id;
  res.send('respond with a resource for id ' + id);
};
