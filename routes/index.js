// Get all of our friend data
var data = require('../data.json');
//this loads our JSON fake "database" file into the data variable. 
//this will get printed to the terminal console via console.log whenever 
//you load the page 
exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};