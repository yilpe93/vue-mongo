const mongoose = require('mongoose');
const users = require('./api/routes/users');
const home = require('./api/routes/home');
const logger = require('./middleware/logger');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/userDB')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use('/', home);
app.use('/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on port ${port}`)});