var mongoose = require('mongoose');
var User = require('../models/user');

var getAll = function(req, res, next) {
  User.find().sort({_id:1}).exec(function(err, user){
    debugger;
    if(err) return next(err);
    res.json(user);
  });
};

var getById = function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  User.findOne({ _id : id}).exec(function(err, user){
    console.log('get user: '+user);
    if(err) return next(err);
    res.json(user);
  });
};

var add = function(req, res, next) {
  console.log('trying to insert user: ' + req.body);
  User.create(req.body).exec(function(err, user){
    if(err) return next(err);
    res.json(user);
  });
};

var remove = function(req, res, next) {
  console.log(req.params.id);
  User.remove({_id: req.params.id}).exec(function(result){
    res.json(result);
  });
};

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.delete = remove;
module.exports.add = add;