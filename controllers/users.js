const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
	db.User.find()
	.then(users =>{
		res.send(users);
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	});
});;

router.get('/createuser', (req, res) => {
	db.User.create({
		name: 'Star Wars Test',
		 image: 'http://www.facetheforce.today/luke/400',
		birthyear: Math.floor(Math.random() * 80) + 1950,
		admin: Math.random() < 0.5 ? true : false,
		color: 'blue'
	})
	.then(result => {
		res.send('success');
	})
	.catch(err => {
		console.log(err);
		res.send('error, check your logs!');
	});
});

module.exports = router;