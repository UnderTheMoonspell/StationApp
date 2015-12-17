var mongoose = require('mongoose');

var StationSchema = new mongoose.Schema({
	name: { type: String, unique: true},
}, {collection: 'stations',  timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('Station', StationSchema);