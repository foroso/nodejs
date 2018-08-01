var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});


	//...
	res.end('this is a http server \n');
}). listen(3000);


function animal(){}
console.log('Server is running at 3000 port');
