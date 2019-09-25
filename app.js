var express = require('express');
var app = express();

var mongoose = require('mongoose');
var config = require('./config');

var auth = require('./middleware/auth');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var frontController = require('./controllers/frontController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

console.log("Conectando a la base de datos...");
mongoose.connect(config.getDbConnectionString());
console.log("Conección OK!");

auth(app);
setupController(app);
apiController(app);
frontController(app);

app.listen(port);