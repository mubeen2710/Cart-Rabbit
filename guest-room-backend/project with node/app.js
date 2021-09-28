/**
* Module dependencies.
*/
var express = require('express')
const routes = require('./routes')
const user = require('./routes/user')
const http = require('http')
const path = require('path');

//var methodOverride = require('method-override');
var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");


var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '9809177092mM?',
              database : 'classicmodels'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
 
//Middleware
app.listen(8080)

app.get('/', routes.index);//call for main index page
app.get('/login', routes.index);//call for login page
app.get('/signup', user.signup);//call for signup page
