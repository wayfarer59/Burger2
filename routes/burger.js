var express = require('express');
var router  = express.Router();

var burgerController = require('../controllers/burgerController');

router.post("/create", burgerController.create);

router.put("/update", burgerController.update);

module.exports = router;