// Require mongoose node module

const mongoose = require('mongoose');

//Create the User Schema
const userSchema = new mongoose.Schema({
	name: String,
	image: String,
	birthyear: Number,
	admin: Boolean 
});

// Create and export the user model

// const userModel = mongoose.model('User', userSchema);

// module.exports = userModel;

module.exports = mongoose.model('User', userSchema);

