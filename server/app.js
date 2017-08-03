const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const PORT = 3000;
const axios = require('axios')

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// If you want to add routes, they should go here!

// For all GET requests that aren't to an API route,
// we will send the index.html!

// app.get('/data', (req, res, next) => {
//   axios.get('http://api.eia.gov/category/?api_key=ab8ea2b9a02b487bbda3d6030af44167&category_id=371')
//     .then(res1 => res.json(res1.data))
//     .catch(next)
// })

app.get('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Handle 404s
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling endware
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.stack)
  res.send(err.message || 'Internal server error');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
