var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('*', function(req, res, next) {
  console.log("main router");
  next();
});

module.exports = router;
