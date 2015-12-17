var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	_id: Number,
	username: String
}, {collection: 'users'});

module.exports = mongoose.model('User', UserSchema);