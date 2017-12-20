var request = require('request');
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = 3000;

http.listen(PORT, () => {
	console.log("Running on port: " + PORT);
});

app.get("/", (req,res) => {
	res.sendFile(__dirname +"/test.html");
});

io.on('connection', socket => {
	console.log('User connected');
});