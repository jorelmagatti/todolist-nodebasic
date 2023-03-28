const express = require('express');
const bodyParserErrorHandler = require('express-body-parser-error-handler');
const { json } = require('body-parser');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./../swagger.json');
const swaggerFile = require('./../swagger_output.json');

const router = require('./router');
const app = express();

// app.use(
//   '/api-docs',
//   swaggerUi.serve, 
//   swaggerUi.setup(swaggerDocument)
// );
  
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(json({limit: '500'}));
app.use(bodyParserErrorHandler());
app.use(router);
module.exports = app;