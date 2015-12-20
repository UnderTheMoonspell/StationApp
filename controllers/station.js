var mongoose = require('mongoose');
var Station = require('../models/station');

var getStation = function(req, res, next) {
  var searchString = req.query['search'];
  if(searchString){
    getByName(req, res, next, searchString);
  }
  else{
    getAll(req, res, next);  
  }

};

var getAll = function (req, res, next) {
  Station.find().sort({_id:1}).exec(function(err, station){
    if(err) return next(err);
    res.json(station);
  });
}

var getByName = function (req, res, next, searchString) {
  var query = {'name' : { '$regex' : '^'+searchString, '$options' : 'i'}};
  Station.find(query).sort({name:1}).exec(function(err, station){
    if(err) return next(err);
    res.setHeader('searchString', searchString);
    res.json(station);
  });
}

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
  var station = new Station(req.body);
  Station.count({name: station.name}, function(err, count){
    if(!count){
      console.log("not a duplicate, inserting...");
      station.save(function(err, station){
        if(err) return next(err);
        res.json(station);
      });    
    }
    else{
      console.log("duplicate record");
      res.status(500).send('duplicate record');
    } 
  })
};

var remove = function(req, res, next) {
  console.log(req.params.id);
  Station.remove({_id: req.params.id}).exec(function(result){
    res.json(result);
  });
};

module.exports.getStation = getStation;
module.exports.getById = getById;
module.exports.delete = remove;
module.exports.add = add;