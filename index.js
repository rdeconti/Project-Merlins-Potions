const path = require('path');

// load up the express framework and body-parser helper
const express = require('./server/node_modules/express');
const bodyParser = require('./server/node_modules/body-parser');

// create an instance of express to serve our end points
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./server/routes/routes.js')(app, fs);

// finally, launch our server on port 3002.
const server = app.listen(3002, () => {
  console.log('listening on port %s...', server.address().port);
});
