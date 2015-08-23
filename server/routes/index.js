var express = require('express');
var router = express.Router();
var logic = require("../../utilities/utility.js");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle Chunk' });
});

router.post('/submit', function(req, res, next) {
  var people = req.body.people.replace(/,/g,'').split(' ');
  var number = req.body.number
  var results = logic.shuffleChunk(people, number);
  res.render('index', { title: "Shuffle Chunk", results: results});
});

module.exports = router;
