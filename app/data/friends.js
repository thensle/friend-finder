var scores = [];

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
	scores = [];
	var compatibility = 40;

	scores.push(user.score1, user.score2, user.score3, user.score4, user.score5, user.score6, 
		user.score7, user.score8, user.score9, user.score10);

	for(var i = 0; i < friends.length; i++){
		var total = 0;

		for(var i = 0; i < friends.scores.length; i++){
			var difference = Math.abs(friends.scores[i] - scores[i]);
			console.log(difference);
			total += difference;
		};
		console.log(total);
		if (total < compatibility){
			topFriend = friends[i].name;
		};

	};



};

module.exports.addToFriends = function(user){
	var newFriend = new Friend (user.name, user.photo, scores);
	friends.push(newFriend);
};

//API Call

// function callAPI(){
// 	var query = "http://localhost:8080/api/friends";
// 	$.ajax({
// 		url: query
// 		method: GET
// 	}).done(function(data){
// 		renderHTML(data);
// 	});
// };

// //Render HTML 
// function renderHTML(){};



module.exports.friends = friends;

