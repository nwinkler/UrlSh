
/*
 * GET a URL.
 */

exports.get = function(req, res){
  var id = req.params.id;
  res.send('respond with a resource for id ' + id);
};


/*
 * POST a new URL.
 */

exports.post = function(req, res){
  var id = req.params.id;
  res.send('respond with a resource for id ' + id);
};
