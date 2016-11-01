// 1) Require http


var request = require('request');

// 2) Connect to the API URL ( https://api.github.com/users/{username} )
function get(profile){

	var targetURL = 'https://api.github.com/users/' + username;
	console.log(username);

	var options = {
		url: targetURL,
		headers: {
			'User-Agent': 'request'
		}
	};

	request(options,callback);
}
// 3) Print out data if user is found
function callback(error, response, body){

	if(!error && response.statusCode == 200){
    var data = JSON.parse(body);

	// a) username image

    console.log("Profile Image: " + data.avatar_url);

    // b) username
    console.log("Username: " + data.login);

    // c) public repo count
    console.log("Number of Public Repos: " + data.public_repos);

    // d) followers count
    console.log("Followers: " + data.followers);
  }
  else{

   // 4) Output the Error if user is not found
    console.log("Invalid Profile Name");
  }


}
module.exports.get = get;

        






