const express = require('express');
const bodyParserErrorHandler = require('express-body-parser-error-handler');
const { json } = require('body-parser');
const router = require('./router');
const app = express();
app.use(json({limit: '500'}));
app.use(bodyParserErrorHandler());
app.use(router);
module.exports = app;