'use strict';
//Require the http module so we can send requests
var http = require('http');
//create our webserver that listens on port 3000 of localhost/127.0.01
http.createServer(function (req, res) {
    //tell our server, hey we are ok and good to go, expect some text!
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //end the request with some text
    res.end('This is my first lab Hello World');
    //listen on port 3000
}).listen(3000);
console.log('Server listening on port 3000');

