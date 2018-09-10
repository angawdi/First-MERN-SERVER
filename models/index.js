// Require mongoose node module
const mongoose = require('mongoose');

// Connect to your Mongo database. Database is connection string. 
mongoose.connect(process.env.MONGOOSE_URL || 'mongodb://localhost:27017/hellowdi20');

// Gather up your models: 
module.exports.User = require('./user');

