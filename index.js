var pool = require('pool');

module.exports = log;

function log (prepend) {
	return pool(function(data) {
		if(!prepend) prepend = ''; else prepend += ' ';
	  console.log(prepend + data);
	});
}