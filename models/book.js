const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
	name: String,
	year: Number
});

const bookScheme = new mongoose.bookScheme({
	title: String,
	pages: Number,
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
	publisher: publisherSchema
});

module.exports = mongoose.models('Book', bookScheme);
