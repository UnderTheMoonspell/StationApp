var mongoose = require('mongoose');

var StationSchema = new mongoose.Schema({
	_id: Number,
	name: String
}, {collection: 'stations'});

module.exports = mongoose.model('Station', StationSchema);