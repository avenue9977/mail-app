// set up 
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// API files for interacting with fake database
const api = require('./server/routes/api');

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Configuration 
app.use(morgan('dev')); // log every request to the console

// Parsers
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));

app.use(bodyParser.json()); // parse application/json

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride());

// API location
app.use('/api', api);


// Send all other requests to the Angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set port and listen (start app)
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log(`Running on localhost:${port}`);
});