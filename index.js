
// Require needed modules
const cors = require('cors');
const express = require('express');
const path = require('path');

// Declare app
const app = express();

// middleware
app.use(cors());

//get referencce to the models
const db = require('./models');

// Include controllers
app.use('/users', require('./controllers/users'));

// Define routes
app.get('*', (req, res) => {
	res.send({ message: 'error'})
});

// listen on 3000
app.listen(3000);