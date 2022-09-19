var express = require('express');

// Router
var router = require('./routes.js');


var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

app.use(express.json());

// Set up our routes
app.use('/', router);

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}