const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const { errors, response } = require('./middlewares/error');

const app = express();

//config
app.set('port', config.app.port);

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

//middlware errors
app.use(errors);
app.use(response);

module.exports = app;
