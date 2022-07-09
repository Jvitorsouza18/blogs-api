require('express-async-errors');
const express = require('express');
const Router = require('./routes/index.routes');
const errorHandler = require('./middlewares/ErrorHandler');

// ...

const app = express();

app.use(express.json());

app.use(Router);

app.use(errorHandler.handle);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
