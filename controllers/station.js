var mongoose = require('mongoose');
var Station = require('../models/station');

var getAll = function(req, res, next) {
  Station.find().sort({_id:1}).exec(function(err, station){
    debugger;
    if(err) return next(err);
    res.json(station);
  });
};

var getById = function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  Station.findOne({ _id : id}).exec(function(err, station){
    console.log('get station: '+station);
    if(err) return next(err);
    res.json(station);
  });
};

var add = function(req, res, next) {
  console.log('trying to insert station: ' + req.body);
  Station.create(req.body).exec(function(err, station){
    if(err) return next(err);
    res.json(station);
  });
};

var remove = function(req, res, next) {
  console.log(req.params.id);
  Station.remove({_id: req.params.id}).exec(function(result){
    res.json(result);
  });
};

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.delete = remove;
module.exports.add = add;