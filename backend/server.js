const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => res.json({ message: 'Server Works' }));
app.use('/api', routes);

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`));

module.exports = app;