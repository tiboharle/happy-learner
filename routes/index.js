var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
const hello = "bonjour";
  res.render('index', { title: 'Express', string: hello });
});

module.exports = router;
