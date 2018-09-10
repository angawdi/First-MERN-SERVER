
// Require needed modules
const express = require('express');

// Declare app
const app = express();

// Get reference to the models
const db = require('./models');

// Define routes
app.get('/', (req, res) => {
	db.User.find()
	.then(users => {
		res.send(users);
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	});
});

// Listen on 3000
app.listen(3000);