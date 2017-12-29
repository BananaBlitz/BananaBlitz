var mongoose = require('mongoose');
var db = require('./models');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/bana_blitz", {
	useMongoClient: true
});

var passport = require('passport');
var request = require('request');
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = 3000;

db.User.create({username: "Jon", password: "pass"}, (err, data) => {
	if(err) console.log(err);
});

http.listen(PORT, () => {
	console.log("Running on port: " + PORT);
});

app.get("/", (req,res) => {
	res.sendFile(__dirname +"/passportTest.html");
});

app.get("/users", (req,res) => {
	db.User.find().then(user => {
		res.json(user);
	}).catch(err => {
		console.log(err);
	});
});

app.post("/users", (req,res) => {
	db.User.create()
});


io.on('connection', socket => {
	console.log('User connected');
});


// app.get("/signup", (req,res) => {
// 	res.sendFile
// });

app.use(passport.initialize());
app.use(passport.session());

app.get("/home", isLoggedIn, (req, res) => {
 
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) return next();

	res.redirect("/");
}