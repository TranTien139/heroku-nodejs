var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send("xin chao tat ca cac ban");
});

app.listen(port);
console.log('server listen port', port);