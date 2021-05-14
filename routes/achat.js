var express = require('express');
var router = express.Router();
var achatCtrl = require('../controllers/achat');

router.post('/', achatCtrl.buy);

module.exports = router;
