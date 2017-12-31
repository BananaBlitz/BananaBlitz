var mongoose = require('mongoose');
var db = require('./models');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/bana_blitz", {
	useMongoClient: true
});

var passport = require('passport');
var flash = require('connect-flash');
require('./config/passport.js')(passport);

var session = require('express-session');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var request = require('request');
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

////
app.use(bodyParser());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({ secret: 'thing' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
///


var PORT = 3000;

http.listen(PORT, () => {
	console.log("Running on port: " + PORT);
});

app.get("/", (req,res) => {
	res.sendFile(__dirname +"/signUpTest.html");
});

app.get("/users", (req,res) => {
	db.User.find().then(user => {
	}).catch(err => {
		console.log(err);
		res.json(user);
	});
});

io.on('connection', socket => {
	console.log('User connected');
});



app.post("/signup", passport.authenticate('local', {
	successRedirect:'/home',
	failureRedirect: '/',
	successFlash: 'Welcome',
	failureFlash: true
}));

app.get("/home", isLoggedIn, (req, res) => {
	res.sendFile(__dirname + "/test.html");
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) return next();

	res.redirect("/");
}