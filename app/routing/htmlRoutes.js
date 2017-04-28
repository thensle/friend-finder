//Dependencies
var path = require("path");

module.exports = function(server){
	server.get("/survey", function(request, response){
		response.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	server.use(function(request, response){
		response.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};