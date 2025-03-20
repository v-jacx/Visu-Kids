const express = require('express');
const db = require('./db');
const routes = require('./routes');
const cors = require('cors');
const logger = require('morgan');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors())
app.use(logger('dev'))

app.use('/api', routes);

db.on('error', console.error.bind(console, 'PostgreSQL connection error:'));

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`));

module.exports = app;