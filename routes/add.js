var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log ("addFriend called");
	

	//get parameter values 
	var name = req.query.name;
	var description = req.query.description;

	var newFriend = {
		name:name,
		description:description,
		imageURL: "http://lorempixel.com/400/400/people"
	}

	//add to friends array
	data.friends.push(newFriend);

	//take you back to index route
	res.redirect('/');
 }