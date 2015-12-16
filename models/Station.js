var mongoose = require('mongoose');

var StationSchema = new mongoose.Schema({
	_id: String,
	name: String
});

module.exports = mongoose.model('Station', StationSchema);