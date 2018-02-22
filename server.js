// express is the server that forms part of the nodejs program
var express = require('express');
var app = express();
// serve static files - e.g. html, css
app.use(express.static(__dirname));


