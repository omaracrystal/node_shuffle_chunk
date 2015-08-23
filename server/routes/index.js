var express = require('express');
var router = express.Router();


var utility = require('../utilities/utility.js')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/shuffle', function(req, res, next){
  res.render('shuffle', {})
});


router.post('/submit', function(req,res){
  var names = req.body.names
  var chunksize = req.body.number
  utility.chunk(names, chunksize)
});


module.exports = router;
