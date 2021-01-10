/* Settings */
const accessControlHTTP = require('../settings/accessControlHTTP');

/* Dependences */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

/* Routers */
const client = require('../routers/client');

const app = express();

/* Configurations */
app.use(cors(accessControlHTTP));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/client', client);

module.exports = app;