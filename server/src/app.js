const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

// parse JSON request body
app.set('json spaces', 2);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

module.exports = app;
