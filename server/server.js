'use strict';

const express = require('express');
const expressSession = require('express-session');

let app = express();

let port = process.env.PORT || 8080;

app.listen(port);
console.log('Listening on', port);
