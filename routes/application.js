var express = require('express');
var router  = express.Router();

var app_controller = require('../controllers/app_controller');

router.get('/', app_controller.index);

module.exports = router;