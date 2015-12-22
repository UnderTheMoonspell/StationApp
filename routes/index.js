var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
  console.log("main router");
  next();
});

module.exports = router;
