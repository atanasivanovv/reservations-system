const express = require('express');
// const routes = require()
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

// parse JSON request body
app.set('json spaces', 2);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// api routes
// app.use('/', routes);

export default app;
