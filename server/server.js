'use strict';

const rootRequire = require('./util/rootRequire'); // eslint-disable-line no-unused-vars
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
// const DynamoStore = require('connect-dynamodb-session')(session);
const Q = require('q');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');

const options = {
  useMongoClient: true,  
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};

mongoose.Promise = Q.Promise;

// Connects to remote MongoDB
var mongodbUri = process.env.MONGO_DB || 'mongodb://localhost/vocab-app';
console.log('>>> mongodbUri = ', mongodbUri);
mongoose.connect(mongodbUri, options);

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

const app = express();

// use mongo to store sessions
app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: "get outta town",
  resave: true,
  saveUninitialized: true
}));

config(app, express);

const port = process.env.PORT || 2727;

app.listen(port);
console.log('Listening on', port);


module.export = app;
