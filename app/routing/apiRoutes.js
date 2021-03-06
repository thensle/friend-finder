//Dependencies
var path = require("path");

// Requirement for API
var friends = require("../data/friends.js");

module.exports = function(server){
	server.get("/api/friends", function(request, response){
		response.json(friends.friends);
	});

	server.post("/survey/create", function(request, response){
		var user = request.body;
		friends.compareScores(user);
		friends.addToFriends(user);
		response.redirect("/");
	});
};