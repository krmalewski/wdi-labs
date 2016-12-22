'use strict'
require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

// import router for our API
const apiPuppiesRouter = require('./routes/api/puppies');

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

// map our apiRouter to the '/api' route
app.use('/api/puppies', apiPuppiesRouter);

app.listen(PORT, () => console.log('woof! 🐶 Server here! listening on', PORT));