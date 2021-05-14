var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
const hello = "bonjour";
  res.render('home', { title: 'Express', string: hello });
});

module.exports = router;
