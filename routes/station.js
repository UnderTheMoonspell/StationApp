var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Station = require('../models/Station.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Station.find(function(err, station){
    console.log("test 2");
    if(err) return next(err);
    res.json(station);
  })
});

module.exports = router;
