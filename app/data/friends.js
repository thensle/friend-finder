//Dependencies
var frontEnd = require("../public/app.js");
console.log(frontEnd);

var scores = [];
var topFriendDiff = [];

var Friend = function(name, photo, scores){
	this.name = name;
	this.photo = photo;
	this.scores = scores;
};

var friends = [
	{
		name: "Delta Work",
		photo: "http://lorempixel.com/400/200/",
		scores: [1,3,2,4,5,3,4,3,1,5]
	},
	{
		name: "Jaymes Mansfield",
		photo: "http://lorempixel.com/400/200/",
		scores: [1,5,3,4,2,4,3,1,2,3]
	},
	{
		name: "Alyssa Edwards",
		photo: "http://lorempixel.com/400/200/",
		scores: [5,4,3,5,2,1,1,2,5,3]
	}
];

module.exports.compareScores = function(user){
	var topFriend = "";
	var topPhoto = "";
	scores = [];
	var compatibility = 40;

	scores.push(user.score1, user.score2, user.score3, user.score4, user.score5, user.score6, user.score7, user.score8, user.score9, user.score10);

	for(var i = 0; i < friends.length; i++){
		console.log(friends.length);
		var potential = friends[i].scores;
		var total = getTotalDifference(potential);

		if (total < compatibility){
			console.log("i is equal to:" + i);
			topPhoto = friends[i].photo;
			topFriend = friends[i].name;
			console.log(topFriend);
			compatibility = total;
		};	
	};

	frontEnd.renderResult(topFriend, topPhoto);	
};
		

module.exports.addToFriends = function(user){
	var newFriend = new Friend (user.name, user.photo, scores);
	friends.push(newFriend);
};

function getTotalDifference(potential){
	var total = 0;

	for(var i = 0; i < potential.length; i++){
		var difference = Math.abs(potential[i] - scores[i]);
		console.log(difference);
		total += difference;
	};
	console.log(total);
	return total;
};

module.exports.friends = friends;

