// set up require
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const Schema = mongoose.Schema;
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

var mongoDB = 'mongodb+srv://admin:JqiJqWyx4u3T1P1A@nodeprojects.ylajj.mongodb.net/node?authSource=admin&replicaSet=atlas-q7qr5a-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.set('useCreateIndex', true);

// export all
module.exports.app = app;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;