//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var htmlPages = require("../app/routings/htmlRoutes.js");
// var apiRoutes = require("../app/routings/apiRoutes.js");

//Server Set-up

var server = express();
var port = 8080;

//API/Body Configurations

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.text());
server.use(bodyParser.json({type: "application/vnd.api+json"}));

//Server Listener

server.listen(port, function(error){
	if(error){
		console.log(error);
	} else {
		console.log("Listening!");
	};
});