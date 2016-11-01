// This will be where the file you call to start the project e.g. (node app.js)

// Require the profile file
var profile = require('./profile.js')
// Get the argument from the command line which will be called like--node app.js kamijean--the last part is the argument
var username = process.argv.slice(2);
// Call to the profile function that will call the ajax function

profile.get(username);