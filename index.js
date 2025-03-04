var express = require('express');
var http = express();
var session = require('express-session');
var url = require('url');
const path = require('path');
const request = require('request');
var exphbs  = require('express-handlebars');
var FormData = require('form-data');
const fetch = require('node-fetch');

// 
const printlog = 1;  // 1 = print log and 0 is not print
var userpermission;

var bodyParser = require('body-parser');
const { Recoverable } = require('repl');
http.use(bodyParser.json());
http.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

var headers = { 
  'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjA1MDI5MjQwfQ.LRiNkw7PypgY7BDHrUUsDMsx5UbYrBmPSgpnH7WXf-s',
  'Content-Type' : 'application/json' 
};

http.engine('handlebars', exphbs.engine({defaultLayout: 'main'})); // default
http.set('view engine', 'handlebars');
http.use(express.static(path.join(__dirname, 'public')));
http.use(express.static('views/images'));

//***************************************************
//login
//***************************************************
http.get('/login', (req, res) => {
  res.render('login',{layout:false});
});

//***************************************************
//dashboard
//***************************************************
http.get('/dashboard', (req, res) => {
  http.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));  
  res.render('dashboard');
});

//***************************************************
//emaAgencies 
//***************************************************
//Form Load
http.get('/emaAgencies',  async (req, res) => {
  http.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
  res.render('emaAgencies');  
});

//***************************************************
//
//***************************************************
http.listen(5544);
console.log(`run browse with http://localhost:5544/login`);
