
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

// trang web http://www.facetheforce.today/
app.get('/createuser', (req, res) => {
	db.User.create({
		name: 'Star Wars Test',
		 image: 'http://www.facetheforce.today/luke/400',
		birthyear: Math.floor(Math.random() * 80) + 1950,
		admin: Math.random() < 0.5 ? true : false
	})
	.then(result => {
		res.send('success');
	})
	.catch(err => {
		console.log(err);
		res.send('error, check your logs!');
	});
});

// Listen on 3000
app.listen(3000);