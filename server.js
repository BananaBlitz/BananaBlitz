var request = require('request');
var express = require('express');

var app = express();

var PORT = 3000;

app.listen(PORT, () => {
	console.log("Running on port: " + PORT);
});

app.get("/", (req,res) => {
	res.send("hi");
});