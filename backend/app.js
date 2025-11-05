const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Your routes
app.use('/api/polls', require('./routes/polls'));
app.use('/api/auth', require('./routes/auth'));

module.exports = app;