
// Require needed modules
const express = require('express');

// Declare app
const app = express();


// Middleware etc.

// Define routes
app.get('/', (req, res) => {
	res.send('Oh hello, world!');
});

// Listen on 3000
app.listen(3000);