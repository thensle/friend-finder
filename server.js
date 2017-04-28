//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


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

//HTML Route Paths
// require("./app/routing/apiRoutes")(server);
// require("./app/routing/htmlRoutes")(server);

//Requirement for API
var friends = require("./app/data/friends.js");

server.get("/survey", function(request, response){
	response.sendFile(path.join(__dirname, "./app/public/survey.html"));
	});

server.get("/", function(request, response){
	response.sendFile(path.join(__dirname, "./app/public/home.html"));
	});

//API Route Paths

server.get("/api/friends", function(request, response){
	response.json(friends.friends);
});

server.post("/survey/create", function(request, response){
	var user = request.body;
	friends.compareScores(user);
	console.log(user.score1);
	console.log(user.score2);

	response.json(user);
	// response.redirect("/");
});