// Imports
const dotenv = require('dotenv');
const config_result = dotenv.config();
const helmet = require('helmet');
const cors = require('cors');

const express = require('express');
const logger = require('morgan');

// Middleware/service inits
const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV != 'production' && config_result.error) {
    throw config_result.error;
  }

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
      origin: '*',
    })
  );

// Routers
const indexRouter = require("./index/indexRouter");
const startRouter = require('./routes/start');

// Application routes
app.use('/', indexRouter);
app.use('/start', startRouter);

// Server
app.listen(PORT, () => {
    console.info(`Magic happening on port: ${PORT}!`)
});