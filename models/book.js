const mongoose = require('mongoose');

const bookScheme = new mongoose.bookScheme({
	title: String,
	pages: Number
});

module.exports = mongoose.models('Book', bookScheme);
