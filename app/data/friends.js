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

module.exports.findTopFriend = function(user){
	var topFriend = "";
	var topPhoto = "";
	scores = [];
	var compatibility = 40;

	scores.push(user.score1, user.score2, user.score3, user.score4, user.score5, user.score6, 
		user.score7, user.score8, user.score9, user.score10);

	for(var i = 0; i < friends.length; i++){
		var currentUser = friends[i];
		console.log(currentUser);
		var total = 0;

		var potential = currentUser.scores;
		compareScores(scores);	

		if (total < compatibility){
	// 		topFriend = currentUser.name;
	// 		topPhoto = currentUser.photo;
	// 	};
};


module.exports.compareScores = function(user){
	for(var i = 0; i < 10; i++){
			var difference = Math.abs(potential[i] - scores[i]);
			console.log(difference);
			total += difference;
		};
	return total;

	// 
	};

	// renderResult(topFriend, topPhoto);

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
function renderResult(){
	console.log("Got a top friend!");
};



module.exports.friends = friends;

