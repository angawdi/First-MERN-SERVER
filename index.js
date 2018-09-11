
// Require needed modules
const express = require('express');

// Declare app
const app = express();

// Get reference to the models
const db = require('./models');

// Include controllers
app.use('/users', require('./controllers/users'));

// Define routes
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/client/build/index.html');
});

// listen on 3000
app.listen(3000);